const router = require('express').Router();

const Recipe = require('./recipes-model.js');

router.get('/:recipe_id', (req, res, next) => {
Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
    res.status(200).json(resource);
    })
    .catch(next);
})


router.use((err, req, res, next) => { // eslint-disable-line
    console.log(err)
    res.status(500).json({
        customMessage: 'Something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;