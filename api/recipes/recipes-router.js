const express = require("express");

const Recipes = require("./recipes-model.js");
const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch(next);
});

module.exports = router;
