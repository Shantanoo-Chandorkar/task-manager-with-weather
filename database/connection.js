const mongoose = require("mongoose");
const config = require("../config");
const mongoUrl = config.MONGO_CONNECTION_STRING;
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(mongoUrl);
    console.log("MongoDb connected successfully.");
    return connect;
  } catch (error) {
    console.log("Error from mongodb.\n", error);
  }
};

module.exports = connectDb;
