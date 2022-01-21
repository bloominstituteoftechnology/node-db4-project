const express = require('express');
const Recipes = require('./model')

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.id)
        res.json(recipe)
    } catch (error) {
        next(error)
    }
})

module.exports = router