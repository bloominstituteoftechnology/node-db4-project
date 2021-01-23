const express = require("express");

const Ingredients = require("./ingredients-model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const ingredientData = await Ingredients.getIngredients();
    res.status(200).json(ingredientData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const ingredientData = await Ingredients.getById(req.params.id);
    res.status(200).json(ingredientData);
  } catch (error) {
    next(error);
  }
});

// router.get("/:id/recipes", (req, res) => {});

module.exports = router;
