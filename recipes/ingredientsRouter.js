const express = require('express')

const Ingredients = require('../data/db-model')

const router = express.Router()


router.get('/:id/recipes', validateIngredientId, (req, res)=>{//X'd
Ingredients.getIngredients(req.params.id)
.then(ingredient_recipes => {
    res.status(200).json(ingredient_recipes)
})
.catch(err => {
    console.log('this is GET ingredients err', err)
    res.status(500).json({error: 'Internal GET ingredients error'})

})
})

function validateIngredientId(req, res, next){ //X'd
    const ingredientId = req.params.id

    Ingredients.findIngredientId(ingredientId)
        .then(ingredient => {
            if(ingredient){
                next()
            }
            else{
                res.status(404).json({error: "ingredient id not found"})
            }
        })
        .catch(err => {
            console.log("this is validate ingredient id error", err)
            res.status(500).json({error: "Internal Validate Ingredient ID issue"})
        })

}

module.exports = router