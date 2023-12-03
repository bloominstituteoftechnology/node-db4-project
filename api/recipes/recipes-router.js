const express = require('express');
const router = express.Router();
const Recipes = require('./recipes-model'); // Adjust the path to your dataAccess file


// GET recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipeId = parseInt(req.params.id);
    const recipe = await Recipes.getRecipeById(recipeId);
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving recipe', error: error.message });
  }
});

module.exports = router;
