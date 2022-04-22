const express = require('express')

const server = express()

const recipesRouter = require('./recipes/recipes-router')

server.use(express.json())

server.use('/api/recipes', recipesRouter)

module.exports = server;