const express = require('express');
const Model = require('./model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    Model.getRecipeById(req.params.id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch()
})

module.exports = router