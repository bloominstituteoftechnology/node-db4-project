const express = require('express');
const router = express.Router();
const Recipes = require('./resipes-model');

// router.get('/', (req, res, next) => {
//     Recipes.find()
//         .then(recipes => {
//             res.json(recipes);
//         })
//         .catch(next);
// });

router.get('/:recipe_id', (req, res, next) => {
    const { recipe_id } = req.params;

    Recipes.getRecipeById(recipe_id)
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(next);
});

// router.use('*', (req, res) => {
//     res.json({ api: 'recipes-router.js catch all /api/server/ end point up' });
// });



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        ricksAdvice: 'Recipes-router.js Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;