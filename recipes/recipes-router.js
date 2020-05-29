const express = require('express')
const db = require('./recipes-model')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const recipes = await db.getRecipes()
        if (recipes) { return res.status(200).json(recipes) }
        res.status(404).json({ message: 'Recipes not found' })
    } catch(e) {
        res.status(500).json({ message: 'DB failure'})
    }
})

router.get('/:id/shoppingList', async (req, res) => {
    const id = req.params.id
    try {
        const shoppingList = await db.getShoppingList(id)
        if (shoppingList) { return res.status(200).json(shoppingList) }
        res.status(404).json({ message: 'Shopping list not found' })
    } catch(e) {
        res.status(500).json({ message: 'DB failure'})
    }
})

router.get('/:id/instructions', async (req, res) => {
    const id = req.params.id
    try {
        const instructions = await db.getInstructions(id)
        if (instructions) { return res.status(200).json(instructions) }
        res.status(404).json({ message: 'Shopping list not found' })
    } catch(e) {
        res.status(500).json({ message: 'DB failure'})
    }
})

module.exports = router