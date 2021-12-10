const express = require('express');
const RecipeBook = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const recipes = await RecipeBook.getRecipes();
        res.json(recipes);
    } catch(e) { next(e) }
});

router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await RecipeBook.getRecipeById(req.params.id);
        res.json(recipe);
    } catch(e) { next(e) }
})

module.exports = router;