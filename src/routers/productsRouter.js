const express = require("express");
const { getPopularProducts } = require("../controllers/productsControllers");
const productsRouter = express.Router();

productsRouter.get("/popular-products", getPopularProducts);

module.exports = productsRouter;
