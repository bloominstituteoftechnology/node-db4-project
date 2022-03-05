const express = require('express')
const recipesRouter = require('./recipes/recipes-router')
// pull in server
const server = express()
// trick out express
server.use(express.json())

server.use('/api/recipes', recipesRouter)

module.exports = server 