const Products = require("../models/productsModel");

const getPopularProducts = async (req, res, next) => {
  try {
    const hotPopularity = req.query.popularity;

    const popularity = {
      popularity: { $regex: new RegExp(`^${hotPopularity}$`, "i") },
    };
    const products = await Products.find(popularity);
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

module.exports = { getPopularProducts };
