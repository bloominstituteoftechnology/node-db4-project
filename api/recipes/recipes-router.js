const express = require('express')
const Recipe = require('./recipes-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.getAll()
        res.json(recipes)
      } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.getById()
        res.json(recipe)
      } catch (err) {
        next(err)
    }
})

module.exports = router
