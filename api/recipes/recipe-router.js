const express = require('express')
const { checkRecipeId } = require('./recipe-middleware')
const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
    const { recipe_id } = req.params
  
    returnThis = req.recipe;
    res.status(200).json(returnThis);

    if (returnThis.id === -1) {
      next();
    }
});
  
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Look at recipe router, error caught there',
      message: err.message,
      stack: err.stack,
    })
})
    
module.exports = router;