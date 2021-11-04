const express = require('express')
const Recipes = require('./recipes_model')

const router = express.Router()

router.get('/:recipe_id', (req, res, next) => {
    const { recipe_id } = req.params

    Recipes.getRecipeById(recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})

module.exports = router
