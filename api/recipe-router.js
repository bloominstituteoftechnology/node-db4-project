const Recipe = require('./recipe-model')
const router = require('express').Router()

router.get('/:id', (req, res) => {
    if(req.params.id) {
        Recipe.getRecipeById(req.params.id)
            .then(r => {
                res.json(r)
            })
            .catch(e => res.status(400).json(e))
    } else { res.status(400).json({message: "error occured"})}
})

module.exports = router