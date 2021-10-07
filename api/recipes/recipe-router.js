const express = require('express');
// const { } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router();

// //[GET] /api/recipes
// router.get('/', (req, res, next) => {})

//[GET] /api/recipes/:id
router.get('/:recipe_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(resp => {
            console.log('resp!', resp)
        })
        .catch(next);
});


//error handling
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});

module.exports = router;
