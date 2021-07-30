const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
})
    .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.json(recipe)
})
})
module.exports = router;