import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import {
  UpdateUserParams,
  UpdateUserRequestDto,
  UpdateUserResponsetDto,
} from "./update-user.dto";
import {
  ErrorProvider,
  PrettierProvider,
  StaticDirectoryProvider,
  ValidationProvider,
} from "@/common/providers";
import * as fs from "fs";
import * as path from "path";
import { User } from "@prisma/client";
import { ValidationResult } from "joi";
import { PrismaProvider } from "@/libs/providers/prisma-client/prisma.provider";
import { UserValidation } from "../../user.validation";
import { RetrieveUserProvider } from "../retrieve-user/retrieve-user.provider";
import { RetrieveUserResponseDto } from "../retrieve-user/retrieve-user.dto";

@Injectable()
export class UpdateUserProvider {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly error: ErrorProvider,
    private readonly retrieveUserService: RetrieveUserProvider,
    private readonly validation: ValidationProvider,
    private readonly staticDirectory: StaticDirectoryProvider,
    private readonly prettier: PrettierProvider
  ) {}

  private readonly MAX_FILESIZE: number = 1; // maximum file size in mb

  public async updateUserByName(name: string, payload: Partial<User>) {
    return await this.prisma.user.update({ where: { name }, data: payload });
  }

  private async usernameAlreadyTaken(name: string): Promise<boolean> {
    return (await this.prisma.user.count({ where: { name } })) > 0;
  }

  public async updateUser({
    name,
    payload,
    avatar,
  }: UpdateUserParams): Promise<UpdateUserResponsetDto> {
    const { user }: Awaited<RetrieveUserResponseDto> =
      await this.retrieveUserService.retrieveSingleUser(name);

    if (this.validation.blankPayload<UpdateUserRequestDto>(payload) && !avatar)
      throw new BadRequestException(
        this.error.badRequest(
          "The request you made is missing the required request body. Please provide the necessary data in the request body to proceed."
        )
      );

    const validation: ValidationResult<UpdateUserRequestDto> =
      this.validation.validate(UserValidation.UPDATEUSER, payload);

    const value: UpdateUserRequestDto =
      validation.value as UpdateUserRequestDto;

    if (validation.error)
      throw new ForbiddenException(
        this.error.forbidden(validation.error.message)
      );

    if (value.name && value.name !== user.name) {
      if (await this.usernameAlreadyTaken(value.name))
        throw new BadRequestException(
          this.error.badRequest(
            "The name is already taken, please choose another name!"
          )
        );

      if (this.validation.invalidUsername(value.name))
        throw new BadRequestException(
          this.error.badRequest(
            "The username should be 64 letters or less and is only allowed to contain alphanumeric, dot (.), hyphen (-) and underscore (_)."
          )
        );
    }

    if (!avatar) {
      await this.updateUserByName(name, value);

      return {
        updated_field: payload,
        updated_user: user,
        code: HttpStatus.OK,
        status: "OK",
      };
    }

    const extname: string = path.extname(avatar.originalname);
    const filename: string =
      this.prettier.prettifyFilename(user.name) + extname;
    const avatarDirpath: string =
      this.staticDirectory.getUserAvatarDirectory(filename);
    const avatarUrlpath: string =
      this.staticDirectory.getUserAvatarUrlpath(filename);
    const oldAvatarDirpath: string =
      this.staticDirectory.getUserAvatarDirectory(path.basename(user.avatar));
    const isInvalidFileSize: boolean = this.validation.invalidFileSize({
      file: avatar,
      size: this.MAX_FILESIZE,
    });

    if (this.validation.invalidPicture(avatar.mimetype))
      throw new UnprocessableEntityException(
        this.error.unprocessableEntity(
          "The avatar provided is not in a valid format. Please ensure the avatar image is in an accepted format (e.g., JPEG, PNG) and try again."
        )
      );

    if (isInvalidFileSize)
      throw new BadRequestException(
        this.error.badRequest(
          "The avatar you are trying to upload exceeds the maximum allowed file size. Please ensure that the file size is within 1mb."
        )
      );

    if (this.validation.invalidPictureExt(avatar.mimetype))
      throw new BadRequestException(
        this.error.badRequest(
          "The picture extension is not supported. Please upload an image with a valid extension (e.g., JPG, PNG, AVIF, SVG)."
        )
      );

    if (await this.validation.brokenPicture(avatar.buffer))
      throw new ForbiddenException(
        this.error.forbidden(
          "The picture you are trying to access is either missing or corrupted."
        )
      );

    await this.updateUserByName(name, { ...value, avatar: avatarUrlpath });

    fs.writeFileSync(avatarDirpath, avatar.buffer);

    if (fs.existsSync(oldAvatarDirpath)) fs.unlinkSync(oldAvatarDirpath);

    return {
      updated_field: { ...payload, avatar: avatarUrlpath },
      updated_user: user,
      code: HttpStatus.OK,
      status: "OK",
    };
  }
}
