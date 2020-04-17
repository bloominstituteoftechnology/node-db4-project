const express = require("express")

const Recipes = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipe()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve recipes" })
        })
})

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params

    Recipes.getShoppingList(id)
        .then(ingredients => {
            console.log(ingredients)
            if (ingredients) {
                req.status(200).json(ingredients)
            } else {
                req.status(404).json({ message: "No ingredients were found" })
            }
        })
        
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve ingredients list" })
        })
    
})

module.exports = router;