const express = require('express')
const recipe = require('./recipes-model')
const mw = require('./recipes-middleware')

const router = express.Router()

router.get('/:id', (req, res) => {
    const {id} = req.params
    recipe.findById(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
})

module.exports = router