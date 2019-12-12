const express = require('express')

const Recipes = require('../data/db-model')

const router = express.Router()

router.get('/', (req, res)=>{
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log('this is GET ALL recipes err', err)
        res.status(500).json({error: 'Internal GET ALL error'})
    })
})




module.exports = router