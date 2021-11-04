const express = require('express')
const server = express()
server.use(express.json())

RecipesRouter = require('./recipes_router')
server.use('/api/recipes', RecipesRouter)

module.exports = server