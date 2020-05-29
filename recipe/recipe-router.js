const express = require('express');

const Recipe = require('./recipe-model.js');


const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const found = await Recipe.getRecipes()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Recipe to Display')
        }
    }
    catch{
        res.status(500).json('Database Error')
    }
})

router.get('/:id/shoppingList', (req, res) => {
    Recipe.getShoppingList(req.params.id)
        .then(recipes => res.status(200).json(recipes))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipe.getInstructions(req.params.id)
        .then(instruction => {
            res.status(200).json(instruction)

        })
        .catch(err => {
            res.status(500)
        })
})

module.exports = router;