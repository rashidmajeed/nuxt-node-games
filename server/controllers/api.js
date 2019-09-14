const ProductBanner = require("../models/product-banner");
const passport = require("passport");

exports.getPageData = function(req, res, next) {
  const data = {};
  ProductBanner.findOne()
    .sort({ createdAt: -1 })
    .populate("product")
    .exec(function(errors, productBanner) {
      if (errors) {
        return res.status(422).send(errors);
      }

      data.productBanner = productBanner;
      return res.json(data);
    });
};
