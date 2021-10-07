// DO NOT CHANGE THIS FILE
const express = require("express");
//const { getRecipeById } = require('./scheme-middleware')
const Recipes = require("./recipe-model.js");

const router = express.Router();

/**
  [GET] /api/schemes

  response:
  [
    {
      "scheme_id": 1,
      "scheme_name": "World Domination",
      "number_of_steps": 3
    },
    {
      "scheme_id": 2,
      "scheme_name": "Get Rich Quick",
      "number_of_steps": 2
    },
    // etc
  ]
 */
router.get(
  "/:recipe_id",
  /* checkRecipeId, */ (req, res, next) => {
    const { recipe_id } = req.params;

    Recipes.getRecipeById(recipe_id)
      .then((recipe) => {
        res.json(recipe);
      })
      .catch(next);
  }
);

module.exports = router;
