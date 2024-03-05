/* This code snippet is exporting an object with various key-value pairs. Each key corresponds to a
specific configuration setting, and the value is retrieved from the environment variables using
`process.env`. These configuration settings include things like database URL, JWT tokens, API keys,
hostnames, and port number. By exporting this object, other parts of the codebase can import and use
these configuration settings as needed. */
export default {
  nodeEnv: process.env.NODE_ENV,
  databaseUrl: process.env.DATABASE_URL,
  directUrl: process.env.DIRECT_URL,
  jwtAccessToken: process.env.JWT_ACCESS_TOKEN,
  jwtRefreshToken: process.env.JWT_REFRESH_TOKEN,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  midtransClientKey: process.env.MIDTRANS_CLIENT_KEY,
  midtransSecretKey: process.env.MIDTRANS_SECRET_KEY,
  midtransApiEndpoint: process.env.MIDTRANS_API_ENDPOINT,
  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  hostname: process.env.HOSTNAME,
  clientHostname: process.env.CLIENT_HOSTNAME,
  port: 8000 || process.env.PORT,
};
