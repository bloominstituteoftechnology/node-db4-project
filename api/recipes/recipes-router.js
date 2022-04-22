const router = require('express').Router()
const Recipe = require('./recipes-model')


router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
})



module.exports = router;