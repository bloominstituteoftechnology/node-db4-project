const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();

router.get('/:id', async (req,res,next) => {
    try{
        const recipes = await Recipes.getRecipeById(req.params.id);
        res.status(200).json(recipes)
    }
    catch(err){
        next(err)
    }
})


module.exports = router;