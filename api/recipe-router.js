const express = require("express")

const Recipe = require("./recipe-model.js")

const router = express.Router()

router.get("/", (_, res) => {
    Recipe.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({ message: error.message})
    })
})

router.get("/:id", (req, res) => {
    try {
        Recipe.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router