const express = require('express');
const Recipe = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.getRecipeById()
    .then(recipes => {
      res.status(200).json(recipes);
    })
})


module.exports = router;
