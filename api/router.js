const express = require('express');
const router = express.Router();

const Recipe = require('./model')

router.get('/', (req, res, next) => {
  Recipe.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
  Recipe.getRecipesById(req.params.recipe_id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(next)
})




module.exports = router;
