const express = require('express')
const helpers = require('./recipes_model')

const router = express.Router();

router.get('/recipes/:id', async (req, res, next) => {
    const { id } = req.params
  
    helpers.getRecipeById(id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
})

module.exports = router