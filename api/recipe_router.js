const express = require('express');
const Recipes = require('./recipe_model');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('endpoint is working')
});

router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.id)
        res.status(200).json(recipe)
    } catch (err){
        next(err)
    }
}); 

module.exports = router;