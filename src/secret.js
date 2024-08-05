require("dotenv").config();
const PORT = process.env.PORT || 5000;
const mongoDbURL = "mongodb://localhost:27017/best-ecommerce-2024";
module.exports = { PORT, mongoDbURL };
// process.env.MONGODB_URI ||
