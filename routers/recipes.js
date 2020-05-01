const express = require('express')

const db = require('../models/recipes.js')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRecipes()
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' })
  })
})

router.get('/:id/shoppingList', (req, res) => {
  const {id} = req.params
  db.getShoppingList(id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({errorMessage: `Failed to locate shopping list for recipe id: ${id}.`})
  })
})

router.get('/:id/instructions', (req, res) => {
  const {id} = req.params
  db.getInstructions(id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({message: 'Failed to get instructions'})
  })
})

module.exports = router;