const express = require('express');
const Model = require('./model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    Model.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
})

module.exports = router