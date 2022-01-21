const express = require('express')
const Recipes = require('./recipes-model')

const router = express.Router()

router.get("*", (req, res, next) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(next);
})

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.id)
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = router