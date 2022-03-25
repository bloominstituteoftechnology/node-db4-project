const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.use("*", (req, res) => {
  res.json({ api: "up" });
});

router.get("/recipes", (req, res, next) => {
  helpers
    .getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

module.exports = router;
