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

module.exports = router;