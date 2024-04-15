const router = require('express').Router() 
const Recipe = require('./recipe-modle')
const { checkRecipeId }  = require('./recipe-middleware')

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
  Recipe.getById(req.params.recipe_id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(err => {
      next(err)
    })
})

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the recipe router",
    message: err.message,
    stack: err.stack
  })
})

module.exports = router