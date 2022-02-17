const express = require('express');
const Recipes = require('../recipes/recipes-model');

const router = express.Router();

router.use('*', req, res, next) => {
    
}

module.exports = router;