const express = require('express');
const Recipes = require('./recipe-model');
// const {} = require('./recipe-middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.getRec
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(next);
})


module.exports = router;