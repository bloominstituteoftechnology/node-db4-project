const express = require('express');
const Recipes = require('../recipes/recipes-model');

const router = express.Router();

router.use('*', req, res, next) => {
    res.json({API: online})
}

router.use((err, req, res, next) => {
    res.status(500),json({
        
    })
})

module.exports = router;