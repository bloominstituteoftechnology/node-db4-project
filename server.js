const express = require('express');
const helmet = require('helmet');
const server = express();
const RecipeModule = require('./Recipe/RecipeModel')
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API IS ONLINE' });
});

server.get('/api/recipes/:id/shoppinglist', (req, res) => {
    const { id } = req.params
    RecipeModule.getShoppingList(id)
        .then(shoppingList => {
            console.log(shoppingList)
            res.json(shoppingList)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err.message)
        })
})
server.get('/api/recipes/', (req, res) => {
    RecipeModule.getRecipes()
        .then(recipes => {
            res.status(200).json({ data: recipes })
        }).catch(err => {
            console.log(err)
            res.status(500).json(err.message)
        })
})

server.get('/api/recipes/:id/instructions', (req, res) => {
    const { id } = req.params
    RecipeModule.getInstruction(id)
        .then(instruction => {
            res.status(200).json({data:instruction})
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json({errMessage: err.message})
        })
})

server.get('/api/ingredients/:id/recipes', (req, res) => {
    const {id} = req.params

    RecipeModule.getRecipeByIngredient(id)
    .then(result => {
        res.status(200).json({data: result})
    }).catch(err => {
        console.log(err.message)
        res.status(500).json({errorMessage: err.message})

    })
    
})

module.exports = server;
