const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Ingredients.find()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients ' + err });
    });
});

module.exports = router;
