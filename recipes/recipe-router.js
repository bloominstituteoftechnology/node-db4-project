const express = require("express");

const Schemes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Schemes.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Schemes.getShoppingList(req.params.id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get shopping list" });
    });
});

router.get("/:id/instructions", (req, res) => {
  Schemes.getInstructions(req.params.id)
    .then((instructions) => {
      res.json(instructions);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to get instructions" });
    });
});

module.exports = router;
