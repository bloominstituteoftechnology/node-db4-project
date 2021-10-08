const express = require('express');
const { checkRecipeId } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router();

// //[GET] /api/recipes
// router.get('/', (req, res, next) => {})

//[GET] /api/recipes/:id
router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => {
            next(err);
        });
});


//error handling
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});

module.exports = router;
