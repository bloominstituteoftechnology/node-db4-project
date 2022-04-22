const express = require('express');

const router = express.Router();

const Recipe = require('./recipes-model');


router.get('/:recipe_id', (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
  .then(respo => {
    res.status(200).json(respo)
  })
  .catch(next)
})



router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'It aint working man',
    message: err.message,
    stack: err.stack
  })
})


module.exports = router;