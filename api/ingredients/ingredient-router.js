const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();

const middleware = require('../middleware/middleware.js');

// GET ALL INGREDIENTS
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredients.find(req.query);
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({
      error:
        'There was an error finding all ingredients. Sorry, that is on us!',
    });
  }
});

// GET AN INGREDIENT BY INGREDIENT ID
router.get('/:id', middleware.validateIngredientId, async (req, res) => {
  try {
    res.status(200).json(req.ingredient);
  } catch (error) {
    const { id } = req.params;

    res.status(500).json({
      error: `There was an error getting the ingredient with the id: ${id}.`,
    });
  }
});

// ADD AN INGREDIENT BY INGREDIENT ID
router.post('/', middleware.validateIngredient, async (req, res) => {
  try {
    const newIngredient = await Ingredients.add(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({
      error: 'There was an error while adding the ingredient to the database.',
    });
  }
});

// UPDATE AN INGREDIENT BY INGREDIENT ID
router.put(
  '/:id',
  middleware.validateIngredientId,
  middleware.validateIngredient,
  async (req, res) => {
    try {
      const { id } = req.params;

      const updatedIngredient = await Ingredients.update(id, req.body);
      res.status(200).json(updatedIngredient);
    } catch (error) {
      const { id } = req.params;

      res.status(500).json({
        error: `There was an error updating the ingredient with the id: ${id}.`,
      });
    }
  },
);

// DELETE AN INGREDIENT BY INGREDIENT ID
router.delete('/:id', middleware.validateIngredientId, async (req, res) => {
  try {
    const { id } = req.params;

    const successFlag = await Ingredients.remove(id);
    if (successFlag > 0) {
      res.status(200).json(req.ingredient);
    }
  } catch (error) {
    const { id } = req.params;

    res.status(500).json({
      error: `The ingredient with the id: ${id} could not be removed from the database.`,
    });
  }
});

// GET ALL RECIPES OF AN INGREDIENT BY INGREDIENT ID
router.get(
  '/:id/recipes',
  middleware.validateIngredientId,
  async (req, res) => {
    try {
      const { id } = req.params;
      const recipes = await Ingredients.findRecipes(id);

      if (recipes.length) {
        res.json(recipes);
      } else {
        res.status(404).json({
          message: `No recipes found for the ingredient with the id: ${id}.`,
        });
      }
    } catch (err) {
      const { id } = req.params;

      res.status(500).json({
        error: `There was an error finding the recipes for the ingredient with the id: ${id}.`,
      });
    }
  },
);

module.exports = router;
