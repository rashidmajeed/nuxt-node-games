const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  slug: { type: String, unique: true, sparse: true },
  title: { type: String, required: true },
  image: String,
  description: String,
  rating: Number,
  // Expected audience
  expaud: [{ type: Schema.Types.Mixed, value: String }],
  requirements: [{ type: Schema.Types.Mixed, value: String }],
  productLink: String,
  price: Number,
  discountedPrice: Number,
  status: {
    type: String,
    enum: ["active", "inactive", "deleted", "published"],
    default: "active"
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Product", productSchema);
