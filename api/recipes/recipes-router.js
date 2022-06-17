const express = require('express');
const Recipe = require('./recipes-model');

const router = express.Router();

router.get('/:id', (req, res) => {
  Recipe.getRecipeById(req.params.id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
})


module.exports = router;
