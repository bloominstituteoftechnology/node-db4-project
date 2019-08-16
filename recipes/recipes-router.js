const express = require('express');
const router = express.Router();
const Recipes = require('./recipe-model.js');

// GET api/recipes/
router.get('/', async (req, res) => {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
});

// GET /api/recipes/:id/shoppingList
router.get('/:id/shoppingList', async (req, res) => {
  const {id} = req.params;

  try {
    const shoppingList = await Recipes.getShoppingList(id);
    console.log(shoppingList);

    res.status(200).json(shoppingList);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Cannot get recipe'});
  }
})

module.exports = router;
