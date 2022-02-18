const express = require("express");
const recipes = require("./recipes-model");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { recipe_id } = req.params;
  const recipe = await recipes.getById(recipe_id);
  return recipe;
});

module.exports = router;
