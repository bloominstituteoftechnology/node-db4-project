const express = require("express");
const Recipes = require("../helpers/dataAccess");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "Something went wrong while fetching recipes from the database."
      });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "Something went wrong while fetching the ingredients."
      });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "Something went wrong while getting the instructions."
      });
    });
});

module.exports = router;