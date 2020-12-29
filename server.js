const express = require('express')

const server = express();
const Recipe = require('./recipemodel.js')
const db = require('./data/db-config')

server.use(express.json());

server.get('/', (req , res) => {
    res.json({ api: 'up' })
})

server.get('/api/recipes', (req, res) => {
    Recipe.getRecipes()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
})


server.get('/api/recipes/:id', (req, res) => {
    const { id } = req.params
    Recipe.getShoppingList()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log(error)
        })
       
})

module.exports = server;