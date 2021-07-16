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

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const { recipe_id } = req.params
        const recipe = await Recipe.getById(recipe_id)
        res.json(recipe)
      } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Work for 25 min, take a break',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router
