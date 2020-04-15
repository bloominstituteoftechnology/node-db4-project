const express = require("express");
const Recipes = require("../models/recipes-model.js");
const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.getAll()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve recipes" });
    });
});

router.post("/", validateRecipeBody, async (req, res, next) => {
  try {
    const [newRecipeId] = await Recipes.add(req.body);
    const addedRecipe = await Recipes.getById(newRecipeId);
    res.status(200).json(addedRecipe);
  } catch (err) {
    next({ message: "Failed to add recipe" });
  }
});

router.get("/:id", validateRecipeId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const recipe = await Recipes.getById(id);
    res.json(recipe);
  } catch (error) {
    next({ message: "Failed to retrieve recipe" });
  }
});

router.get("/:id/shoppinglist", validateRecipeId, (req, res, next) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve shopping list" });
    });
});

router.get("/:id/instructions", validateRecipeId, (req, res, next) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then((instructions) => {
      res.json(instructions);
    })
    .catch((err) => {
      next({ message: "Failed to retrieve instructions" });
    });
});

function validateRecipeBody(req, res, next) {
  const recipe = req.body;
  !recipe.name
    ? next({
        status: 400,
        message: "Please provide a recipe name",
      })
    : next();
}

async function validateRecipeId(req, res, next) {
  try {
    const recipe = await Recipes.getById(req.params.id);
    !recipe
      ? next({
          status: 404,
          message: "Recipe does not exist",
        })
      : next();
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = router;
