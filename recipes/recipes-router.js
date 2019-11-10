const express = require('express');
const router = express();
const Recipes = require('./recipes-model');

// GET /api/recipes - all recipes (without details about ingredients or steps)
router.get('/', (req, res) => {
    Recipes.getRecipes(req.query)
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving blog posts',
            });
        })
});

// GET /api/recipes/:id - a single recipe (without details about ingredients or steps)
router.get('/:id', (req, res) => {
    Recipes.getRecipeId(req.params.id)
        .then(recipe => {
            if(recipe) {
                res.status(200).json(recipe);
            } else {
                res.status(404).json({
                    message: 'Recipe not found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Recipe could not be retrieved',
            });
        });
})

// GET /api/recipes/:id/shoppingList - a list of ingredients and quantites for a single recipe
router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
        .then(singleList => {
            console.log(req);
            console.log(singleList)
            if (singleList.length > 0) {
                res.status(200).json(singleList);
            } else {
                res.status(404).json({
                    message: 'Shopping List not found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving shopping list',
            });
        });
});

// GET /api/recipes/:id/instructions - a correctly ordered list of how to prepare a single recipe
router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
        .then(recipeInstructions => {
            console.log(req);
            console.log(recipeInstructions)
            if (recipeInstructions.length > 0) {
                res.status(200).json(recipeInstructions);
            } else {
                res.status(404).json({
                    message: 'Shopping List not found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving instrutions',
            });
        });
});

// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient

module.exports = router;