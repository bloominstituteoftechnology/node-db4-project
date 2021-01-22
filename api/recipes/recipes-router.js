const express = require('express')

const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json({msg: 'oops'})
        })
})

router.get('/:id/ingredients', (req, res) => {
    Recipes.getShoppingList(req.body.params)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            res.status(200).json({msg: 'oops'})
        })
})

router.get('/:id/steps', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(err => {
            res.status(500).json({msg: 'yikes'})
        })
})

module.exports = router