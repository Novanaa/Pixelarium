/* This code snippet is exporting an object with various key-value pairs. Each key corresponds to a
specific configuration setting, and the value is retrieved from the environment variables using
`process.env`. These configuration settings include things like database URL, JWT tokens, API keys,
hostnames, and port number. By exporting this object, other parts of the codebase can import and use
these configuration settings as needed. */
export default {
  nodeEnv: process.env.NODE_ENV,
  database: {
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
  jsonWebToken: {
    accessToken: process.env.JWT_ACCESS_TOKEN,
    refreshToken: process.env.JWT_REFRESH_TOKEN,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  midtrans: {
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
    secretKey: process.env.MIDTRANS_SECRET_KEY,
    endpoint: process.env.MIDTRANS_API_ENDPOINT,
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  hostname: process.env.HOSTNAME,
  clientHostname: process.env.CLIENT_HOSTNAME,
  port: 8000 || process.env.PORT,
};
