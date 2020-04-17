const express = require("express")

const Ingredients = require('./ingredient-model')

const router = express.Router()

router.get("/", (req, res) => {
    const { id } = req.params
    console.log(id)
    Ingredients.getIngredients(id)
    
        .then(ingredients => {
            console.log(ingredients)
            if (ingredients) {
                res.status(200).json(ingredients)
            } else {
                res.status(404).json({ message: "No ingredients were found" })
            }
        })
        
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve ingredients list" })
        })
    
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    console.log(id)
    Ingredients.getIngredientsById(id)
        .then(ingredient => {
            res.status(200).json(ingredient)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not find ingredient"})
        })
})

module.exports = router;