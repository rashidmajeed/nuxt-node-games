const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productBannerSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  image: String,
  title: String,
  subtitle: String,
  createdAt: { type: Date, default: Date.now }
});

const ProductBannerModel = mongoose.model("ProductBanner", productBannerSchema);

module.exports = ProductBannerModel;
