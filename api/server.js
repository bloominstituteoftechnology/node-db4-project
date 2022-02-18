const express = require('express')
const morgan = require('morgan')

const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)


module.exports = server;
