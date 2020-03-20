const express = require('express');
const Recipes = require('./recipes-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Failed to retrieve recipes'});
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Recipes.getRecipe(id)
    .then(response => {
        //console.log(response);
        res.status(200).json(response);
    })
    .catch(err => {
        //console.log(err);
        res.status(500).json({error: err, message: `Failed to recipe with id ${id}`})
    });
});

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id;
    Recipes.getShoppingList(id)
        .then(response => {
            //console.log(response);
            res.status(200).json(response);
        })
        .catch(err => {
            //console.log(err);
            res.status(500).json({error: err, message: `Failed to retrieve shopping list for recipe with id ${id}`})
        });
});

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;
    Recipes.getInstructions(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: `Failed to retrieve instructions for recipe with id ${id}`});
        });
});

router.get('/:id/details', (req, res) => {
    const id = req.params.id;
    Recipes.getRecipeWithDetails(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Failed to retrieve details for recipe with id ${id}`});
    });
})

module.exports = router;