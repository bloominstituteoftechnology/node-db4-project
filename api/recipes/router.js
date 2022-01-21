const express = require('express')
const router = express.Router()
const Recipe = require('./model')

router.get('/:id', (req, res, next) => {
    console.log('GET all endpoint connected')
    Recipe.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(next)
})



module.exports = router;