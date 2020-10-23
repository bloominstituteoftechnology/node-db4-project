const express = require("express")
const recipe = require("../models/recipe")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const allRecipes = await recipe.getRecipes()
    res.json(allRecipes)
  } catch(err) {
    next(err)
  }
})

router.get("/:id/ingredients", async (req, res, next) => {
  try {
    const ingredients = await recipe.getShoppingList(req.params.id)
    if (!ingredients) {
      return res.status(404).json({
        message: "Recipe not found",
      })
    }

    res.json(ingredients)
  } catch(err) {
    next(err)
  }
})

router.get("/:id/steps", async (req, res, next) => {
  try {
    const steps = await recipe.getInstructions(req.params.id)
    res.json(steps)
  } catch(err) {
    next(err)
  }
})

module.exports = router