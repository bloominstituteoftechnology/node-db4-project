const express = require('express');
const router = express.Router();

const db = require('../data/db-config.js');

// GET api/recipes/
router.get('/', async (req, res) => {
    const recipes = await db('recipes');

    res.status(200).json(recipes);
});

module.exports = router;
