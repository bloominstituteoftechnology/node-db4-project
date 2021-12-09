const express = require('express');
const RecipeBook = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const recipes = await RecipeBook.getRecipes();
        res.json(recipes)
    } catch(e) { next(e) }
});

module.exports = router;