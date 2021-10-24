const express = require('express');
const router = express.Router();
const Model = require('./model')

router.get('/recipes/:id', (req, res, next) => {
    const { id } = req.params;
    Model.getRecipesById(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })

})

module.exports = router;