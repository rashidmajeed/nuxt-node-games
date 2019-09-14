const Article = require("../models/article");
const slugify = require("slugify");
const request = require("request");
const AsyncLock = require("async-lock");
const lock = new AsyncLock();

function parseFilters(queries) {
  const parsedQueries = {};
  if (queries.filter) {
    Object.keys(queries).forEach(qKey => {
      if (qKey.includes("filter")) {
        const pKey = qKey.match(/\[([^)]+)\]/)[1];
        parsedQueries[pKey] = queries[qKey];
      }
    });
  }

  return parsedQueries;
}

exports.getArticles = (req, res) => {
  const pageSize = parseInt(req.query.pageSize) || 0;
  const pageNum = parseInt(req.query.pageNum) || 1;
  const skips = pageSize * (pageNum - 1);
  const filters = req.query.filter || {};

  Article.find({ status: "published", ...filters })
    .sort({ createdAt: -1 })
    .populate("author -_id -password -products -email -role")
    .skip(skips)
    .limit(pageSize)
    .exec(function(errors, publishedArticles) {
      if (errors) {
        return res.status(422).send(errors);
      }

      Article.count({}).then(count => {
        return res.json({
          articles: publishedArticles,
          count,
          pageCount: Math.ceil(count / pageSize)
        });
      });
    });
};

exports.getArticleBySlug = (req, res) => {
  const slug = req.params.slug;

  Article.findOne({ slug })
    .populate("author -_id -password -products -email -role")
    .exec(function(errors, foundArticle) {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(foundArticle);
    });
};

exports.getArticleById = (req, res) => {
  const articleId = req.params.id;

  Article.findById(articleId, (errors, foundArticle) => {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(foundArticle);
  });
};

exports.getUserArticles = (req, res) => {
  const user = req.user;

  Article.find({ author: user.id }, function(errors, userArticles) {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(userArticles);
  });
};

exports.updateArticle = (req, res) => {
  const articleId = req.params.id;
  const articleData = req.body;

  Article.findById(articleId, function(errors, foundArticle) {
    if (errors) {
      return res.status(422).send(errors);
    }

    if (
      articleData.status &&
      articleData.status === "published" &&
      !foundArticle.slug
    ) {
      foundArticle.slug = slugify(foundArticle.title, {
        replacement: "-", // replace spaces with replacement
        remove: null, // regex to remove characters
        lower: true // result in lower case
      });
    }

    foundArticle.set(articleData);
    foundArticle.updatedAt = new Date();
    foundArticle.save(function(errors, foundArticle) {
      if (errors) {
        return res.status(422).send(errors);
      }

      return res.json(foundArticle);
    });
  });
};

exports.createArticle = (req, res) => {
  const lockId = req.query.lockId;

  if (!lock.isBusy(lockId)) {
    lock.acquire(
      lockId,
      function(done) {
        const articleData = req.body;
        const article = new Article(articleData);
        article.author = req.user;

        article.save((errors, createdArticle) => {
          setTimeout(() => done(), 5000);

          if (errors) {
            return res.status(422).send(errors);
          }

          return res.json(createdArticle);
        });
      },
      function(errors, ret) {
        errors && console.error(errors);
      }
    );
  } else {
    return res.status(422).send({ message: "Article is getting saved!" });
  }
};

exports.deleteArticle = (req, res) => {
  const articleId = req.params.id;

  Article.deleteOne({ _id: articleId }, function(errors) {
    if (errors) {
      return res.status(422).send(errors);
    }

    res.json({ status: "deleted" });
  });
};
