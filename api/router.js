const express = require('express');
const { getRecipesById } = require('./model.js');

const router = express.Router();

router.get('/reipes/:id', (req, res, next) => {
    getRecipesById(req.params.id)
        .then((resipes) => {
            res.json(recipes)
        })
        .catch(next())
})

module.exports = router;