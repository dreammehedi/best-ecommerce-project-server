const { model, Schema } = require("mongoose");
const productSchema = new Schema({}, { strict: false });

const Products = model("Products", productSchema);

module.exports = Products;
