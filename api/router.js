const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.get("/recipes/:recipe_id", (req, res, next) => {
  helpers
    .getRecipeById(req.params.recipe_id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch(next);
});

module.exports = router;
