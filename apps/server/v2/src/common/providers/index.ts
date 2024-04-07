import { MockDataProvider } from "./mock-data/mock.provider";
import { StaticDirectoryProvider } from "./static-directoty/static-directory.provider";
import { ErrorProvider } from "./error/error.provider";
import { ValidationProvider } from "./validation/validation.provider";
import { PrettierProvider } from "./prettier/prettier.provider";

export {
  MockDataProvider,
  StaticDirectoryProvider,
  ErrorProvider,
  ValidationProvider,
  PrettierProvider,
};

export default [
  MockDataProvider,
  StaticDirectoryProvider,
  ErrorProvider,
  ValidationProvider,
  PrettierProvider,
];
