const express = require('express')
const {  } = require('./recipe-middleware')
const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/:recipe_id', checkSchemeId, (req, res, next) => {
    const { recipe_id } = req.params
  
    Recipes.findById(recipe_id)
      .then(recipe => {
        res.json(recipe)
      })
      .catch(next)
  })
  
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Look at recipe router, error caught there',
      message: err.message,
      stack: err.stack,
    })
})
    
module.exports = router;