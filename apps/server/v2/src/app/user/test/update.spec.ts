/* eslint-disable no-console */

import { test, expect, describe, afterAll } from "bun:test";
import prisma from "@/libs/prisma";
import supertest from "supertest";
import app from "@/main";
import http from "@/constant/code";
import { User } from "prisma/generated/client";
import { ErrorResponse } from "@/utils/interfaces/error-response";
import { UpdateUserResponseData } from "../controllers/update";
import filetestPath from "@/constant/filetest-path";

afterAll(async () => await prisma.$disconnect());

describe("Update User", () => {
  test("should be return 400 status code if the payload is empty", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "The payload must be at least have one between bio, avatar, name, or email"
    );
  });
  test("should be return 400 status code if the payload name field had invalid data type", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("name", 127);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the payload name field includes capital letters", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("name", "Testt");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the payload name field includes whitespace", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("name", "test test");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the length of payload name field is more than 64", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field(
          "name",
          "gafhakjsgdjasdhsajdhksadhksjhdkhasdhjklsdhkajshdkjshdkahdkjashdjkashdkjshdklashdkjshdkjshkdlahsdhkjdhsjdhadh"
        );
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the bio payload field name is not a string", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        bio: 123,
      });
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the bio payload field name is not a string", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        name: 123,
      });
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the payload field email is not a string", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        email: 123,
      });
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the payload field email is not valid", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        email: "test",
      });
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if payload field not allowed", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        test: 123,
      });
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
  });
  test("should be return 400 status code if the username is already taken", async () => {
    const findUser: Awaited<User | null> = await prisma.user.findUnique({
      where: { origin_code: 1 },
    });
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("name", findUser?.name || "john_doe");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "The username has already taken, please choose another username."
    );
  });
  test("should be return 404 status code if the user doesn't exist", async () => {
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch("/user/0").field("name", "test");
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusNotFound);
    expect(body.code).toBe(http.StatusNotFound);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "The user was doesn't exist, please try again with another account!"
    );
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        bio: "aku kaya!!",
      });
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server).patch(`/user/${user?.name}`).send({
        bio: "aku kaya!!",
        email: "test@gmail.com",
        name: user?.name,
      });
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .send({
          bio: "aku kaya!!",
          email: "test@gmail.com",
          name: user?.name,
        })
        .set("Content-Type", "application/json");
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
  });
  test("make sure response data 'updated_user' should be defined", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .send({
          bio: "aku kaya!!",
          email: "test@gmail.com",
          name: user?.name,
        })
        .set("Content-Type", "application/json");
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
    expect(body.updated_user).toBeDefined();
    expect(body.updated_user).not.toBeUndefined();
    expect(body.updated_user).not.toBeNull();
  });
  test("make sure response data 'updated_user' should be not match to requested user data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .send({
          bio: "aku kaya!!",
          email: "test@gmail.com",
          name: user?.name,
        })
        .set("Content-Type", "application/json");
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
    expect(body.updated_user).toBeDefined();
    expect(body.updated_user).not.toBeUndefined();
    expect(body.updated_user).not.toBeNull();
    expect(JSON.stringify(body.updated_user)).not.toMatch(JSON.stringify(user));
  });
  test("make sure response data 'updated_user' should be not included user email data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .send({
          bio: "aku kaya!!",
          email: "test@gmail.com",
          name: user?.name,
        })
        .set("Content-Type", "application/json");
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
    expect(body.updated_user.email).toBeUndefined();
  });
  test("make sure response data 'updated_user' should be not included user password data", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .send({
          bio: "aku kaya!!",
          email: "test@gmail.com",
          name: user?.name,
        })
        .set("Content-Type", "application/json");
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
    expect(body.updated_user.password).toBeUndefined();
  });
  test("make sure user data should be updated", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const payload = {
      bio: "aku kaya!!",
      email: "test@gmail.com",
      name: user?.name,
    };
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .send(payload)
        .set("Content-Type", "application/json");
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
    expect(body.updated_user.bio).toBe(payload.bio);
    expect(body.updated_user.name).toBe(payload.name as string);
  });
  test("should be return 400 status code if the file is invalid", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", "testt testttt")
        .set("Content-Type", "application/json")
        .attach("avatar", filetestPath.json);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "Invalid file type, please provide a valid picture or avatar!"
    );
  });
  test("should be return 400 status code if the file size is more than 1mb", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", "testt testttt")
        .set("Content-Type", "application/json")
        .attach("avatar", filetestPath["20mb"]);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusBadRequest);
    expect(body.code).toBe(http.StatusBadRequest);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "The picture file size was too big, please provide a smaller picture size!"
    );
  });
  test("should be return 422 status code if the picture file extension is not supported", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", "testt testttt")
        .set("Content-Type", "application/json")
        .attach("avatar", filetestPath["sgi"]);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusUnprocessableEntity);
    expect(body.code).toBe(http.StatusUnprocessableEntity);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "The picture extension wasn't supported by pixelarium, please try again with supported picture extension like .png or .jpg"
    );
  });
  test("should be return 403 status code if the picture file was broken", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", "testt testttt")
        .attach("avatar", filetestPath["broken"]);
    const body: ErrorResponse = request.body as ErrorResponse;

    console.log(body);
    expect(request.status).toBe(http.StatusForbidden);
    expect(body.code).toBe(http.StatusForbidden);
    expect(body.status).toBe("KO");
    expect(body.messege).toBe(
      "Sorry, the picture file you uploaded appears to be corrupted and cannot be processed, this could be due to various reasons."
    );
  });
  test("should be return 200 status code", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", "testt testttt")
        .attach("avatar", filetestPath["jpeg"]);
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
  });
  test("make sure it can accept application/json", async () => {
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", "testt testttt")
        .set("Content-Type", "application/json")
        .attach("avatar", filetestPath["jpeg"]);
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
  });
  test("make sure user data bio data updated", async () => {
    const bio: string = "this is my bio";
    const user: Awaited<User | null> = await prisma.user.findFirst();
    const request: Awaited<supertest.Request | supertest.Response> =
      await supertest(app.server)
        .patch(`/user/${user?.name}`)
        .field("bio", bio)
        .set("Content-Type", "application/json")
        .attach("avatar", filetestPath["jpeg"]);
    const body: UpdateUserResponseData = request.body as UpdateUserResponseData;

    console.log(body);
    expect(request.status).toBe(http.StatusOk);
    expect(body.status).toBe("OK");
    expect(body.updated_user.bio).toBe(bio);
  });
});
