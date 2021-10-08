const express = require('express')
const router = express.Router()

const Recipe = require('./model')

router.get('/', (req, res, next) => {
    Recipe.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Recipe.getRecipeById(req.params.id)
        .then(recipeById => {
            res.json(recipeById)
        })
        .catch(next)
})

module.exports = router
