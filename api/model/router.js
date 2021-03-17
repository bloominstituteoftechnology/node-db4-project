const express = require("express")
const model = require("./model")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
      const recipes = await model.getRecipes()
      console.log(recipes)
      res.json(recipes)
    } catch (err) {
      next(err)
    }
  })

  router.get('/:id/shoppingList', async (req, res, next) => {
    
    try {
      const shoppingList = await model.getShoppingList(req.params.id)

    res.json(shoppingList)
    } catch (err) {
      next(err)
    }
  })

  router.get('/:id/instructions', async (req, res, next) => {
    try {
      const recipeInstructions = await model.getInstructions(req.params.id)
    
    res.json(recipeInstructions)
    } catch (err) {
      next(err)
    }
  })
  

  module.exports = router