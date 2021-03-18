const express = require('express');
const router = express.Router();

const Ingredient = require('./ingredients-model');

router.get('/:id/recipes', async (req, res, next) => {
  const { id } = req.params;
  try {
    const list = await Ingredient.getRecipes(id);
    res.status(200).json(list);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
