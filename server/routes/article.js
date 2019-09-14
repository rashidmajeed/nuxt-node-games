const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");
const AuthCtrl = require("../controllers/auth");

router.get("", articleCtrl.getArticles);

router.get(
  "/me",
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  articleCtrl.getUserArticles
);

router.get("/:id", articleCtrl.getArticleById);

router.get("/s/:slug", articleCtrl.getArticleBySlug);

router.post(
  "",
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  articleCtrl.createArticle
);

router.patch(
  "/:id",
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  articleCtrl.updateArticle
);

router.delete(
  "/:id",
  AuthCtrl.onlyAuthUser,
  AuthCtrl.onlyAdmin,
  articleCtrl.deleteArticle
);

module.exports = router;
