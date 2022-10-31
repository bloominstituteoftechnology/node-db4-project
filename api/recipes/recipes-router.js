const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: 'Something went wrong in the recipes router',
        error: err.message
    });
});

module.exports = router;