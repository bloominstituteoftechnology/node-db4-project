const express = require('express')

const db = require('../models/recipes.js')

const router = express.Router()

router.get('/:id/recipes', (req, res) => {
    const {id} = req.params
    db.getIngredientInRecipe(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get recipes by ingredient.'})
    })
})

module.exports = router;