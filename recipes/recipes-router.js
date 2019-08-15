const express = require('express');
const router = express.Router();
const Recipes = require('./recipe-model.js');

// GET api/recipes/
router.get('/', async (req, res) => {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
});

module.exports = router;
