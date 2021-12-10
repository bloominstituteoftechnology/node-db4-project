const router = require('express').Router()
const Recipes = require('./recipes_model')

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.recipe_id)
        res.status(200).json(recipe)
    } catch (err) {
        next(err)
    }
})

module.exports = router

