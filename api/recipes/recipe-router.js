const express = require('express')
const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
})
router.get('/:id/shoppingList', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
      res.json(ingredients)
    })
})


module.exports = router;
