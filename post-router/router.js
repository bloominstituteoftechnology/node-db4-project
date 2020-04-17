const express = require('express');

const Recipes = require('./router-model');

const router = express.Router();

router.get('/', (req, res) =>{
    Recipes.find()
    .then(recipes =>{
        if (!recipes){
            res.status(404).json({error: 'Recipe list not found'})
        } else {
        res.json(201).json({message: 'Rendering Recipe List...', recipes})
    }
    })
    .catch(err => {
        res.status(500).json({error: 'Failed to find the recipe list', err})
    })
})

router.get('/:id', (req, res) => {
    Recipes.findById(id)
    .then(recipe => {
        if(!recipe){
            res.status(404).json({error: 'Recipe not found'})
        } else {
            res.status(201).json({message: 'Recipe found: ', recipe})
        }
    })
    .catch(err => {
        res.status(500).json({error: 'Failed to find the recipe', err})
    })
})

router.post('/', (req, res) => {
    const recipeData = req.body;
    Recipes.add(recipeData)
        .then(recipe => {
            if (!recipe) {
                res.status(400).json({error: 'Unable to process recipe data'})
            } else {
                res.status(201).json({message: 'Recipe added: ', recipe})
            }
        })
        .catch(err =>{
            res.status(500).json({error: 'Failed to add the recipe to the list', err})
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Recipes.findById(id)
        .then(recipe => {
            if (!recipe) {
                res.status(404).json({error: 'Recipe not found with given id.'})
            } else {
                res.status(201).json({message: "Recipe successfully updated."})
            }
        })
        .catch(err => {
            res.status(500).json({error: 'Failed to update the recipe', err})
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.remove(id)
    .then(deleted => {
        if (!deleted) {
            res.status(400).json({error: 'Could not delete item with given id'})
        } else {
            res.status(201).json({message: 'Deleted the recipe'})
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Falied to delete the recipe' })
    })
})


router.get('/', (req, res) => {
    Recipes.getRecipe()
    .then(recipes =>{
        if (!recipes){
            res.status(404).json({error: 'Recipe list not found'})
        } else {
        res.json(201).json({message: 'Rendering Recipe List...', recipes})
    }
    })
    .catch(err => {
        res.status(500).json({error: 'Failed to find the recipe list', err})
    })      
})

router.get('/:id/recipe', (req, res) => {
    const {id} = req.params;

    Recipes.getRecipeIngredients()
        .then(ingredient => {
            if (!ingredient) {
                res.status(404).json({ error: 'Could not find the ingredients for the recipe with set id, please try again'})
            } else {
                res.status(201).json({ message: 'Ingredients needed: ', ingredient })
            }
        })
        .catch(err => {
            res.status(500).json({error: 'Could not find the ingredients for the recipe', err})
        })
})

router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params

    Recipes.getShoppingList(id)
        .then(list => {
            if (!list) {
                res.status(404).json({error: 'Could not find the shopping list with specified id'})
            } else {
                res.status(201).json({list})
            }
        })
        .catch(err => {
            res.status(500).json({error: 'Could not find the shopping list', err})
        })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params
    Recipes.getInstructions(id)
        .then(instruction =>{
            if (!instruction) {
                res.status(404).json({error: 'Could not find the instructions with specified id'})
            } else {
                res.status(201).json({instruction})
            }
        })
        .catch(err => {
            res.status(500).json({error: 'Could not find the instructions', err})
        })
})


module.exports = router;
