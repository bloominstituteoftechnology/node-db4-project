const Recipe = require('./recipes-model')
const router = require('express').Router()



router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeyById(req.params.recipe_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})