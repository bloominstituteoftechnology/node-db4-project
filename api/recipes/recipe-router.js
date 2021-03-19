const express = require('express')
const Recipes = require('./recipe-modal')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.find()
    .then(rec => {
        res.json(rec)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    const {id} = req.params
    Recipes.findById(id)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(next);
})

module.exports = router;