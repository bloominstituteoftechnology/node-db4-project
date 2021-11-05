const express = require('express');
const Recipes = require('./model')
const router = express.Router();

router.get('/recipes', (req, res, next) => {
    res.send('endpoint is working')
});

router.get('/recipes/:id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.id)
        res.status(200).json(recipe)
    } catch (err){
        next(err)
    }
});

module.exports = router;