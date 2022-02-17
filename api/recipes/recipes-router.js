const router = require('express').Router();
const Recipe = require('./recipes-modal')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})







router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Recipe router not working',
        message: err.message,
        stack: err.stack
    })
})
module.exports = router