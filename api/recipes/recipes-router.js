const router = require('express').Router();

const Recipe = require('./recipes-model'); 

router.get('/recipes:id', (req, res, next) => {
Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
        res.status(200).json(200)
    })
    .catcH(next);
})

router.use((err, req, res, next) => { //eslint-disable-line 
res.status(500).json({
    customMessage: 'wrong in router',
    message: err.message,
    stack: err.stack,
})
})

module.exports = router