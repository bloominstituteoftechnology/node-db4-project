const express = require('express');
const router = express.Router();
// const Recipes = require('./resipes-model');

router.use('*', (req, res)=> {
    res.json({api: 'up'});
});

// router.get('/', (req, res, next) => {
//     Recipes.find()
//         .then(recipes => {
//             res.json(recipes);
//         })
//         .catch(next);
// });

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        ricksAdvice: 'Recipes-router.js Finding the real error is 90% of the bug fix',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;