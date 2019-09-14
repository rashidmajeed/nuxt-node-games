const ProductBanner = require("../models/product-banner");

exports.createBanner = function(req, res, next) {
  const productData = req.body;

  const productBanner = new ProductBanner(productData);
  productBanner.product = productData.product;

  productBanner.save((errors, createdBanner) => {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(createdBanner);
  });
};

exports.getProductBanners = function(req, res, next) {
  ProductBanner.find({})
    .populate("product")
    .sort({ createdAt: -1 })
    .exec(function(errors, banners) {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(banners);
    });
};

exports.updateProductBanners = function(req, res, next) {
  const id = req.params.id;

  ProductBanner.findById(id)
    .populate("product")
    .exec(function(errors, banner) {
      if (errors) {
        return res.status(422).send(errors);
      }

      banner.set({ createdAt: new Date() });
      banner.save((errors, updatedBanner) => {
        if (errors) {
          return res.status(422).send(errors);
        }

        return res.json(updatedBanner);
      });
    });
};
