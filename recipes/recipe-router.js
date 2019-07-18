const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes ' + err });
    });
});

module.exports = router;
