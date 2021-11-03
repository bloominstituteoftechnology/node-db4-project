const router = require('express').Router()

const Recipe = require('./recipes-model')

const {
  handleError,
  checkRecipeId,
} = require('../recipes/recipes-middleware')



router.get('/:recipe_id', checkRecipeId, async (req, res, next) => {
    res.json(req.possibleRecipe)
})


router.use(handleError);


module.exports = router

