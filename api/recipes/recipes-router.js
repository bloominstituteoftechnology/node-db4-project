const router = require('express').Router()
const Recipes = require('./recipes-model')

router.get('/:recipe_id', (req,res,next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
} )

router.use('*', (req, res, next)=>{
    res.json({
        message: 'hello'
    })
})

router.use((err,req,res,next) =>{
    res.status(202).json({
        Mymessage: 'Router Error',
        message: err.message,
        stack: err.stack
    })
})
module.exports = router