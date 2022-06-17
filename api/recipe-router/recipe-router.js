const express = require('express')
const router = express.Router()
const {getRecipeById} = require('./recipe-model')
const {validRecipeId} = require('./recipe-middleware')


router.get('/:id', validRecipeId, (req,res,next)=>{
    getRecipeById(req.params.id)
        .then(result=>{
            res.json(result)
        })
        .catch(next)
})


module.exports = router