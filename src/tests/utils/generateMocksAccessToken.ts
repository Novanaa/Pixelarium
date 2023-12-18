import JsonWebToken from "../../services/JsonWebToken";
import payload from "../const/payload";

export default function generateMocksAccessToken(): string {
  const jwt: JsonWebToken = new JsonWebToken();

  const { accessToken: token } = jwt.sign(payload);
  return token;
}
