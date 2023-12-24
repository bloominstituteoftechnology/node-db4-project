const express = require('express')
const Recipe = require('./model');

const router = express.Router()

router.get('/:recipe_id',(req,res,next)=> {
    console.log('you have reached the router');
    const { recipe_id } = req.params;

    Recipe.getRecipeById(recipe_id)
        .then(results => {
            res.json(results);
        }) .catch(next);
});

module.exports = router;