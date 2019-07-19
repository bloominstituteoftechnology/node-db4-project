const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

const middleware = require('../middleware/middleware.js');

// GET ALL RECIPES
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find(req.query);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      error: 'There was an error finding all recipes. Sorry, that is on us!',
    });
  }
});

// GET A RECIPE BY RECIPE ID
router.get('/:id', middleware.validateRecipeId, async (req, res) => {
  try {
    res.status(200).json(req.recipe);
  } catch (error) {
    const { id } = req.params;

    res.status(500).json({
      error: `There was an error getting the recipe with the id: ${id}.`,
    });
  }
});

// ADD A NEW RECIPE
router.post('/', middleware.validateRecipe, async (req, res) => {
  try {
    const newRecipe = await Recipes.add(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({
      error: 'There was an error while adding the recipe to the database.',
    });
  }
});

// UPDATE A RECIPE BY RECIPE ID
router.put(
  '/:id',
  middleware.validateRecipeId,
  middleware.validateRecipe,
  async (req, res) => {
    try {
      const { id } = req.params;

      const updatedRecipe = await Recipes.update(id, req.body);
      res.status(200).json(updatedRecipe);
    } catch (error) {
      const { id } = req.params;

      res.status(500).json({
        error: `There was an error updating the recipe with the id: ${id}.`,
      });
    }
  },
);

// DELETE A RECIPE BY RECIPE ID
router.delete('/:id', middleware.validateRecipeId, async (req, res) => {
  try {
    const { id } = req.params;

    const successFlag = await Recipes.remove(id);
    if (successFlag > 0) {
      res.status(200).json(req.recipe);
    }
  } catch (error) {
    const { id } = req.params;

    res.status(500).json({
      error: `The recipe with the id: ${id} could not be removed from the database.`,
    });
  }
});

// ADD A NEW STEP TO A RECIPE BY RECIPE ID
router.post(
  '/:id/instructions',
  middleware.validateRecipeId,
  middleware.validateStep,
  async (req, res) => {
    try {
      const { id } = req.params;

      const step = await Recipes.addStep(id, req.body);
      res.status(201).json(step);
    } catch (error) {
      const { id } = req.params;

      res.status(500).json({
        error:
          `There was an error adding an instructions to the recipe with the id: ${id}.` +
          error,
      });
    }
  },
);

// ADD A INGREDIENT TO A RECIPE BY RECIPE ID
router.post(
  '/:id/shoppingList',
  middleware.validateRecipeId,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { ingredient_id, quantity } = req.body;

      if (!ingredient_id || !quantity) {
        res.status(400).json({
          message:
            'There was not sufficient information given for a recipe. Provide ingredient_id and quantity!',
        });
      } else {
        const recipeAddedIngredients = await Recipes.addIngredient(
          id,
          ingredient_id,
          quantity,
        );
        res.status(201).json(recipeAddedIngredients);
      }
    } catch (error) {
      const { id } = req.params;

      res.status(500).json({
        error: `There was an error adding ingredients to the recipe with the id: ${id}.`,
      });
    }
  },
);

// DELETE A INGREDIENT FROM A RECIPE BY RECIPE ID
router.delete(
  '/:id/shoppingList',
  middleware.validateRecipeId,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { ingredient_id } = req.body;

      if (!ingredient_id) {
        res.status(400).json({
          message:
            'There was not sufficient information given for a recipe. Provide ingredient_id!',
        });
      } else {
        const recipeDeletedIngredients = await Recipes.removeIngredient(
          id,
          ingredient_id,
        );
        if (recipeDeletedIngredients !== 0) {
          res.status(200).json(recipeDeletedIngredients);
        } else {
          res.status(404).json({
            message: `There was no recipe found with the id ${id} that contains the ingredients that should be deleted.`,
          });
        }
      }
    } catch (error) {
      const { id } = req.params;

      res.status(500).json({
        error: `There was an error deleting ingredients of the recipe with the id: ${id}.`,
      });
    }
  },
);

// GET A INGREDIENT OF A RECIPE BY RECIPE ID
router.get(
  '/:id/shoppingList',
  middleware.validateRecipeId,
  async (req, res) => {
    try {
      const { id } = req.params;
      const IngredientsOfRecipe = await Recipes.findShoppingList(id);

      if (IngredientsOfRecipe.length) {
        res.json(IngredientsOfRecipe);
      } else {
        res.status(404).json({
          message: `The recipe with the id: ${id} does not contain any ingredients so far.`,
        });
      }
    } catch (err) {
      const { id } = req.params;

      res.status(500).json({
        error: `There was an error getting ingredients of the recipe with the id: ${id}.`,
      });
    }
  },
);

// GET A STEP OF A RECIPE BY RECIPE ID
router.get(
  '/:id/instructions',
  middleware.validateRecipeId,
  async (req, res) => {
    try {
      const { id } = req.params;
      const instructions = await Recipes.findSteps(id);

      if (instructions.length) {
        res.json(instructions);
      } else {
        res.status(404).json({
          message: `The recipe with the id: ${id} does not contain any instructions so far.`,
        });
      }
    } catch (error) {
      const { id } = req.params;

      res.status(500).json({
        error:
          `There was an error getting instructions of the recipe with the id: ${id}.` +
          error,
      });
    }
  },
);

module.exports = router;
