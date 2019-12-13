const express = require('express')

const Recipes = require('../data/db-model')


const router = express.Router()



// console.log("console", Recipes.getRecipes().then(recipes => {
//    recipes
// }))

router.get('/', (req, res)=>{//X'd
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log('this is GET ALL recipes err', err)
        res.status(500).json({error: 'Internal GET ALL error'})
    })
})

router.get('/:id/shoppingList', validateId, (req, res)=>{//X'd
        Recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(err => {
            console.log('this is GET ingredients err', err)
            res.status(500).json({error: 'Internal GET ingredients error'})
    
        })
})

router.get('/:id/instructions', validateId, (req, res)=>{//X'd
        Recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(err => {
            console.log('this is GET instructions err', err)
            res.status(500).json({error: 'Internal GET instructions error'})
    
        })
})



function validateId(req, res, next){ //X'd
    const recipeId = req.params.id

    Recipes.findRecipesId(recipeId)
        .then(recipe => {
            if(recipe){
                next()
            }
            else{
                res.status(404).json({error: "recipe id not found"})
            }
        })
        .catch(err => {
            console.log("this is validate id error", err)
            res.status(500).json({error: "Internal Validate ID issue"})
        })

}



module.exports = router