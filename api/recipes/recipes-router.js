const express = require('express');
const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req,res) => {
    res.json({ message: 'api success'})
})

router.get('/:recipe_id', (req, res, next) => {

    const { recipe_id } = req.params
    Recipes.getRecipeById(recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        checkpoint: 'You made it to the last middleware!',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;