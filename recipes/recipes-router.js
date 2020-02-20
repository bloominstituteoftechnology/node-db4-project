const express = require("express");
const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error :(" });
  }
});

module.exports = router;
