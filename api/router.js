const express = require('express')
const { getRecipesById } = require('./model')

const router = express.Router()

router.get('/recipes/:id', (req, res, next) => {
  getRecipesById(req.params.id)
    .then((recipes) => {
      res.json(recipes)
    })
    .catch(next)
})

module.exports = router