const router = require('express').Router();
const Recipe = require('./recipes-model')

router.get('/recipes', (req, res, next) => {
    Recipe.getByRecipes()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

module.exports = router;