const express = require("express");
const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "server error :(" });
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  try {
    const ingredients = await Recipes.getShoppingList(req.params.id);
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ error: "server error :(" });
  }
});

router.get("/:id/instructions", async (req, res) => {
  try {
    const instructions = await Recipes.getInstructions(req.params.id);
    res.status(200).json(instructions);
  } catch (error) {
    res.status(500).json({ error: "server error :(" });
  }
});

module.exports = router;
