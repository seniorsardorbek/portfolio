require("dotenv/config");

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    credential: process.env.DB_CREDINTIAL,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME
  },
  cloud: {
    name: process.env.CLOUD_NAME,
    key: process.env.API_KEY,
    secret: process.env.API_SECRET,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
