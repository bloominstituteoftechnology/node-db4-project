const express = require('express');
const Ingredients = require('./ingredients-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Ingredients.getIngredients()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Unable to retrieve ingredients'});
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Ingredients.getIngredientsById(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: `Unable to retrieve ingredient with id ${id}`});
        });
})

router.get('/:id/requirements', (req, res) => {
    const id = req.params.id;
    Ingredients.getRecipeRequirementsWithIngredient(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Unable to retrieve recipe requirements for ingredient with id ${id}`});
    });
})

router.get('/:id/recipes', (req, res) => {
    const id = req.params.id;
    Ingredients.getRecipesWithIngredient(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: `Unable to retrieve the recipes for ingredient with id ${id}`});
        });
})



module.exports = router;

