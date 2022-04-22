const router = require('express').Router()
const Recipe = require('./recipes-model.js')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeByID(req.params.recipe_id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stak: err.stack,
    })
})

module.exports = router