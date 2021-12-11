const express = require('express')
const recipesRouter = require('./recipies/recipies-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

module.exports = server