const express = require('express');
const { validateRecipeID } = require('./recipes-middleware');
const recipesModel = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  recipesModel
    .find()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch(next);
});

router.get('/:id', validateRecipeID, (req, res, next) => {
  const { id } = req.params;
  recipesModel
    .getRecipeById(id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    sageAdvice: 'Server Error',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
