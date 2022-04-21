const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/:recipe_id', (req,res,next)=>{
    Recipes.getRecipeById(req.params.recipe_id)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(next);
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        debugMessage: 'something went wrong in recipes-router.js',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;