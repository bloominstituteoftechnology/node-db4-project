const router = require('express').Router()
const Recipe = require('./recipers-model')

router.get('/:reciper_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.reciper_id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})



router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router