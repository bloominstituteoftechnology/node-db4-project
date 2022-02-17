const express = require('express');
const { validateRecipeId } = require('./recipes-middleware');
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

router.get('/:id', validateRecipeId, (req, res, next) => {
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
    message: 'Server Error',
  });
});

module.exports = router;
