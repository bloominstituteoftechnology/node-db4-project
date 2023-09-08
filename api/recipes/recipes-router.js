const express = require('express')
const router = express.Router()
const Recipe=require('./recipes-module')

router.get('/:recipe_id',(req,res,next)=>{
    Recipe.getRecipeById(req.params.recipe_id)
    .then(resource=>{
        //throw new Error("wrong !!")
        res.status(200).json(resource)
    })
    .catch(next)
})















router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router