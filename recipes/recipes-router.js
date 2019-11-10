const express = require('express');
const router = express();
const Recipes = require('./recipes-model');

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

module.exports = router;