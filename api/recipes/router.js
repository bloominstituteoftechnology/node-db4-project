const express = require('express')
const router = express.Router()
const Recipe = require('./model')

router.get('/', (req, res, next) => {
    Recipe.getRecipe()
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  res.json({ message: "Post!" })
})

router.put('/:recipe_id', (req, res, next) => {
  res.json({ message: "Put!" })
})

router.delete('/:recipe_id', (req, res, next) => {
  res.json({ message: "Delete!" })
})


module.exports = router