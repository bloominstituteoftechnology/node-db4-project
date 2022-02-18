const recipeRouter = require('./recipe-router')
const express = require('express')
const server = express()

server.use(express.json())
server.use('/api/recipe', recipeRouter)

module.exports = server