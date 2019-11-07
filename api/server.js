const express = require('express')
const server = express()
server.use(express.json())

const recipes = require('../routes/recipes.js')
const ingre = require('../routes/ingredients.js')

server.use('/api/recipes', recipes)
server.use('/api/ingredients', ingre)

module.exports = server;