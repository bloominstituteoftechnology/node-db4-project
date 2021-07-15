const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('GET all endpoint connected')
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
    console.log('GET by id endpoint connected')
})

module.exports = router;