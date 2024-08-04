const mongoose = require("mongoose");
const { mongoDbURL } = require("../secret");
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongoDbURL, options);
    console.log("MongoDB connected successfully.");

    mongoose.connection.on("error", () => {
      console.error("MongoDB connection error: ", error);
    });
  } catch (error) {
    console.error(`Could not connect mongoDB server: ${error.message}`);
  }
};

module.exports = connectDB;
