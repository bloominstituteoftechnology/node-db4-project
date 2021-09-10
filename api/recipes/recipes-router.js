const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/', (req, res, next) => {
  Recipe.getAll()
    .then(recipes => res.json(recipes))
    .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
  const {recipe_id} = req.params

  Recipe.getById(recipe_id)
    .then(recipe => res.json(recipe))
    .catch(next)
})

module.exports = router
