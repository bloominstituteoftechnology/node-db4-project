const express = require('express');
const { checkRecipeId, checkRecipeName } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router();

// //[GET] /api/recipes
router.get('/', (req, res, next) => {
    Recipes.getRecipes()
        .then(recipes => res.json(recipes))
        .catch(next)
})

//[GET] /api/recipes/:id
router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
        try{
            res.json(req.recipe)
        }
        catch(err){
            next(err);
        }
});

//[POST] /api/recipes
router.post('/', checkRecipeName, (req,res, next) => {
    Recipes.createRecipe(req.body)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(next)
})

//[PUT] /api/recipes/:id
router.put('/:recipe_id', checkRecipeId, checkRecipeName, (req, res, next) => {
    Recipes.updateRecipe(req.params.recipe_id, req.body)
        .then(updatedRecipe => {
            res.json(updatedRecipe);
        })
        .catch(next)
})

//[DELETE] /api/recipes/:id
router.delete('/:recipe_id', checkRecipeId, (req, res, next) => {
    Recipes.deleteRecipe(req.params.recipe_id)
        .then(() => {
            res.json(req.recipe)
        })
        .catch(next)
})

//error handling
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});

module.exports = router;
