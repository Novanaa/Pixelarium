import { GoogleAuthProvider } from "./google/google.provider";
import { UserInfoProvider } from "./userinfo/userinfo.provider";
import { GithubAuthProvider } from "./github/github.provider";
import { LogoutProvider } from "./logout/logout.provider";
import { TokenizerProvider } from "./tokenizer/tokenizer.provider";

export default [
  UserInfoProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  LogoutProvider,
  TokenizerProvider,
];

export {
  UserInfoProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  LogoutProvider,
  TokenizerProvider,
};
