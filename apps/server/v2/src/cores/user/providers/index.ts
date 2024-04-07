import { DeleteUserProvider } from "./delete-user/delete-user.provider";
import { RetrieveUserProvider } from "./retrieve-user/retrieve-user.provider";
import { UpdateUserProvider } from "./update-user/update-user.provider";

export { RetrieveUserProvider, DeleteUserProvider, UpdateUserProvider };

export default [RetrieveUserProvider, DeleteUserProvider, UpdateUserProvider];
