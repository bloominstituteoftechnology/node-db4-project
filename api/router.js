const express = require("express");
const helpers = require("./model");

const { checkRecipesExists } = require("./middlewares");

const router = express.Router();

router.get("/recipes", (req, res, next) => {
  helpers
    .getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

router.post("/recipes", (req, res, next) => {
  helpers
    .createRecipes(req.body)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch(next);
});

router.delete("/recipes/:recipes_id", checkRecipesExists, (req, res, next) => {
  helpers
    .deleteRecipes(req.params.recipes_id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    })
    .catch(next);
});

module.exports = router;
