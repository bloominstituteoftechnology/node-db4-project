const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/', (req, res, next) => {
  Recipe.getAll()
    .then(recipes => res.json(recipes))
    .catch(next)
})

module.exports = router
