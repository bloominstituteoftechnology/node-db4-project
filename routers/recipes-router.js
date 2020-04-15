const express = require("express");
const Recipes = require("../models/recipes-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get shopping list" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then((instructions) => {
      res.json(instructions);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get instructions" });
    });
});

module.exports = router;
