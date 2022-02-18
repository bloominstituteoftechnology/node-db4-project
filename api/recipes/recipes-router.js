const router = require('express').Router()
const md  =require('./recipes-middleware')

router.get('/:recipeId', md.checkRecipesId, (req, res, next)=>{
    try{
        res.json(req.recipe)
    }catch(err){
        next(err)
    }
})

router.use('*', md.checkRecipesId, (req, res)=>{
    res.json({
        message: "work!"
    })
})

module.exports = router