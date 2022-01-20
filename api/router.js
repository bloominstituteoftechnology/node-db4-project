const express = require("express");

const Recipe = require("./model");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  Recipe.getRecipeById(req.params.id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

module.exports = router;
