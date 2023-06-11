const router = require('express').Router()
const Recipe = require('./recipes-modelnpm ')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource =>{
        res.status(200).json(resource)
    })
    .catch(next)
})




router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "Something Wrong",
        message: err.message
    })
}) 

module.exports = router