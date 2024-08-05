require("dotenv").config();
const PORT = process.env.PORT || 5000;
const mongoDbURL = "mongodb://localhost:27017/best-ecommerce-2024";
const tokenExpireDate = process.env.EXPIRE_TOKEN_DATE || "15d";
const tokenSecretKey =
  process.env.TOKEN_SECRET_KEY ||
  "bb16a0b2721f04bd7e830a58312845e21544fd46c72e9b372fca17d1deed597f2b4b8a35b183fb6993d307d21cbcf591db5502c42802cd7fccec1395825bada7";
module.exports = { PORT, mongoDbURL, tokenExpireDate, tokenSecretKey };
