const router = require('express').Router();
const Recipe = require('./recipe-model');
// const { checkId } = require('./recipe-middleware');

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})



router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});


module.exports = router;