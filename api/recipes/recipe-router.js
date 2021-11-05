const express = require('express')
const { validateRecipe } = require('./recipe-middleware')
const Recipe = require('./recipe-model')

const router = express.Router()

router.get('/:id', validateRecipe, async (req, res) => {
    const id = req.params.id
    const recipe = await Recipe.getRecipeById(id)
    res.status(200).json(recipe)
})

module.exports = router