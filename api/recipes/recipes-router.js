const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipeData = await Recipes.getRecipes();
    res.status(200).json(recipeData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/shoppingList", async (req, res, next) => {
  try {
    const shoppingList = await Recipes.getShoppingList(req.params.id);
    res.status(200).json(shoppingList);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
