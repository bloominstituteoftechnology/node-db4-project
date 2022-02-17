const express = require('express');
const Recipe = require('./recipes-model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

module.exports = router;
