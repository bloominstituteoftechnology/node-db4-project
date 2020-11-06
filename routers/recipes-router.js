const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes");

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.getRecipes();
    if (recipes.length) {
      res.status(200).json(recipes);
    } else {
      next({ code: 404, message: "no recipes found" });
    }
  } catch (error) {
    next({ code: 500, message: error.message });
  }
});

router.get("/:id", validateRecipeId, (req, res) => {
  res.status(200).json(req.recipe);
});

router.get("/:id/shoppinglist", validateRecipeId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const shoppinglist = await Recipe.getShoppingList(id);
    if (shoppinglist.length) {
      res.status(200).json(shoppinglist);
    } else {
      next({ code: 400, message: "no ingredients for this recipe" });
    }
  } catch (error) {
    next({ code: 500, message: error.message });
  }
});

router.get("/:id/instructions", validateRecipeId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const instructions = await Recipe.getInstructions(id);
    if (instructions.length) {
      res.status(200).json(instructions);
    } else {
      next({ code: 400, message: "no instructions for this recipe" });
    }
  } catch (error) {
    next({ code: 500, message: error.message });
  }
});

async function validateRecipeId(req, res, next) {
  const { id } = req.params;
  try {
    const recipe = await Recipe.getRecipeById(id);
    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      next({ code: 404, message: "no recipe found with given id" });
    }
  } catch (error) {
    next({ code: 500, message: error.message });
  }
}

router.use((err, req, res, next) => {
  res.status(err.code).json({ message: err.message });
});

module.exports = router;
