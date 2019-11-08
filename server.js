const express = require('express')
const server = express()
server.use(express.json())

const recipes = require('./data/recipes/recipes-router.js')


server.use('/api/recipes', recipes)

module.exports = server; 