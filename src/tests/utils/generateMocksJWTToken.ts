import JsonWebToken from "../../services/JsonWebToken";
import payload from "../const/payload";

/**
 * Generates a JWT (JSON Web Token) with both access and refresh tokens.
 *
 * @returns {Object} An object containing the generated access token and refresh token.
 */
// Function for generating mock JWT tokens.
// The generated tokens will be used for testing purposes.
// Uses the JsonWebToken service for creating the tokens.
export default function generateMocksJWTToken(): {
  accessToken: string;
  refreshToken: string;
} {
  // Importing the JsonWebToken service to use for signing the JWT
  const jwt: JsonWebToken = new JsonWebToken();

  // Using the sign method to create JWT tokens with the given payload
  const { accessToken, refreshToken } = jwt.sign(payload);

  // Returning the generated accessToken and refreshToken as an object
  return {
    accessToken,
    refreshToken,
  };
}
