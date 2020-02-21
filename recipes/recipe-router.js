const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (request, response) => {
  Recipes.getRecipes()
    .then(recipe => {
      response.status(200).json(recipe);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ message: "Failed to retrieve recipes" });
    });
});

router.get("/:id/shoppingList", (request, response) => {
  const { id } = request.params;
  Recipes.getShoppingList(id)
    .then(list => {
      if (list.length) {
        response.status(200).json(list);
      } else {
        response.status(404).json({ message: "Shopping list not found" });
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      response
        .status(500)
        .json({ message: "Failed to retrieve shopping list " });
    });
});

router.get("/:id/instructions", (request, response) => {
  const { id } = request.params;
  Recipes.getInstructions(id)
    .then(instructions => {
      if (instructions.length) {
        response.status(200).json(instructions);
      } else {
        response.status(404).json({ message: "Instructions not found" });
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ message: "Failed to retrieve instructions" });
    });
});

module.exports = router;
