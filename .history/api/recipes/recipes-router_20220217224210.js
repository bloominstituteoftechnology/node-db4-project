const express = require('express');
const Recipes = require('../recipes/recipes-model');

const router = express.Router();

router.use('*', req, res, next) => {
    res.json({API: online})
}

router.use(())

module.exports = router;