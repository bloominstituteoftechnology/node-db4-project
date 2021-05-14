const express = require('express')
const Recipes = require('./recipes-model')

const router = express.Router();

router.get('/:id', (req, res) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => res.json(500).json(err.message, err.stack))
})

module.exports = router;