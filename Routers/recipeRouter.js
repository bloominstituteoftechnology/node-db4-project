const express = require("express");
const Recipe = require("./recipeModel");
const router = express.Router();
router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Recipe" });
    });
});
router.get("/:id/shoppinglist", (req, res) => {
  Recipe.getShoppingList(req.params.id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Shopping list" });
    });
});
router.get("/:id/instructions", (req, res) => {
  Recipe.getInstructions(req.params.id)
    .then((instructions) => {
      res.status(200).json(instructions);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Shopping instructions" });
    });
});

module.exports = router;
