require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  WEATHERSTACK_API_KEY: process.env.WEATHERSTACK_API_KEY,
  WEATHERSTACK_BASE_URL: `http://api.weatherstack.com`,
};
