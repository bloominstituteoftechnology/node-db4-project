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

})

module.exports = router;
