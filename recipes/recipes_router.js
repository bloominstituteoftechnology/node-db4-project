const express = require("express");

const Recipes = require("./recipes_models");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      // console.log(recipes);

      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(List => {
      console.log(List);
      if (List.length) {
        res.status(200).json(List);
      } else {
        res
          .status(404)
          .json({ message: "Could not find shopping list for given recipe" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get shopping list" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(steps => {
      console.log(steps);
      if (steps.length) {
        res.status(200).json(steps);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given recipe" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get steps for given recipe" });
    });
});

module.exports = router;
