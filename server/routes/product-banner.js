const express = require("express");
const router = express.Router();

const ProductBannerCtrl = require("../controllers/product-banner");
const AuthCtrl = require("../controllers/auth");

router.post("", ProductBannerCtrl.createBanner);
router.get(
  "",
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProductBannerCtrl.getProductBanners
);

router.patch(
  "/:id",
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  ProductBannerCtrl.updateProductBanners
);

module.exports = router;
