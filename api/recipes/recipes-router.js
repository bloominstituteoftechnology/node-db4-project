const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();

router.use('*', (req, res, next) => {
    res.json({
        message: "Router is working"
    })
})

module.exports = router;