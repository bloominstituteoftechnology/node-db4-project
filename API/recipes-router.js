const db = require('../data/db-config');
const router = require('express').Router();
const { checkRecipeId } = require('./recipes-middleware');
const Recipe = require('./recipes-model');

router.get('/:recipe_id', checkRecipeId, async (req, res, next) => {
  const { recipe_id } = req.params;

  try {
    const recipe = await Recipe.getById(recipe_id);
    res.json(recipe);
  } catch(err) { next(err) }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
});

module.exports = router;