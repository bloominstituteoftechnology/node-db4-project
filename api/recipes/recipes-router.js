const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: 'Something went wrong in the recipes router',
        error: err.message
    });
});

module.exports = router;