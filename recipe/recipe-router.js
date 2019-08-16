const express = require('express');

const RecipeDb = require('./recipe-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
 try {
  const recipe = await RecipeDb.find();
  res.status(200).json(recipe);
 } catch (err) {
  res.status(500).json({ message: 'Failed to get recipes' });
 }
});

router.get('/:id', async (req, res) => {
 try {
  const recipe = await RecipeDb.findById(req.params.id);
  if (recipe.length > 0) {
   res.status(200).json(recipe);
  } else {
   res.status(404).json({ message: 'There is no recipe with this id' });
  }
 } catch (err) {
  res.status(500).json({ message: 'Failed to get this recipe' });
 }
});

router.post('/', async (req, res) => {
 try {
  const recipe = await RecipeDb.add(req.body);
  res.status(200).json(recipe);
 } catch (err) {
  res.status(500).json({ message: 'Failed to add recipe' });
 }
});

module.exports = router;
