const express = require('express')

//will require the router(s)
const recipesRouter = require('./recipes/recipesRouter')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/recipes', recipesRouter)

module.exports = server;