const express = require('express')
const router = express.Router();

const Recipe = require('./recipe-model')

router.get('/', async (req,res,next)=>{
    try {
        const cars = await Recipe.getRecipes()
        res.status(200).json(cars)
    } catch (e) {
        next(e)
    }
})

router.get('/:id/shoppingList', async (req, res, next) =>{
    const { id } = req.params;
    try {

      const list = await Recipe.getShoppingList(id)  
      res.status(200).json(list)
    }
    catch (e){
        next(e)
    }
    
})
router.get('/:id/instructions', async (req, res, next) =>{
    const { id } = req.params;
    try {
      const instructions = await Recipe.getInstructions(id)  
      res.status(200).json(instructions)
    }
    catch (e){
        next(e)
    }
    
})

router.get('/:id/recipes', async (req, res, next) =>{
    
})

module.exports = router