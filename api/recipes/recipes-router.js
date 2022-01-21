const express = require('express')
const Recipes = require('./recipes-model')

const router = express.Router()

// TEST: http get :9000/api/recipes
router.get('/', async (req, res, next)=>{
    try{
        const recipe = await Recipes.getRecipeById(req.params)
        res.json(recipe)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next)=>{
    res.status(500).json({
        message: err.message,
        prodMessage: "Whoops, something went wrong!"
    })
})

module.exports = router