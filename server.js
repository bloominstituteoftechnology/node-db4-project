const express = require('express')
const helmet = require('helmet')

//will require the router(s)
const recipesRouter = require('./recipes/recipesRouter')
const ingredientsRouter = require('./recipes/ingredientsRouter')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

module.exports = server;