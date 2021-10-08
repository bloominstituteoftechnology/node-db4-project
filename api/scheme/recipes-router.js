const express = require("express");
const { checkRecipeId } = require("./recipes-middleware");
const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch(next);
});

router.get("/:id", checkRecipeId, (req, res, next) => {
  res.status(200).json(req.recipe);
});

module.exports = router;
