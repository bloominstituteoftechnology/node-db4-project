const express = require("express");
const Ingredients = require("../models/ingredients-model.js");
const router = express.Router();
const validate = require("../utils/validators.js");

router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredients.getAll();
    res.json(ingredients);
  } catch (error) {
    next({ message: "Failed to add ingredient" });
  }
});

router.post("/", validate.ingredientBody, async (req, res, next) => {
  try {
    const [id] = await Ingredients.add(req.body);
    const ingredient = await Ingredients.getById(id);
    res.json(ingredient);
  } catch (error) {
    next({ message: "Failed to add ingredient" });
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const ingredient = await Ingredients.getById(req.params.id);

    !ingredient.length
      ? res.status(400).json({
          message: `Ingredient with id of ${id} does not exist!`,
        })
      : res.json(ingredient);
  } catch (error) {
    next({ message: "Failed to get ingredient" });
  }
});

router.delete("/:id", validate.ingredientId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Ingredients.remove(id);

    if (+result === 1) {
      res.status(200).json({
        message: `Ingredient with id ${id} successfully deleted! `,
      });
      //res.status(204);
    } else {
      next({
        message: `Failed to delete ingredient with id of ${id}`,
      });
    }
  } catch (error) {
    next({ message: "Failed to get ingredient" });
  }
});

module.exports = router;
