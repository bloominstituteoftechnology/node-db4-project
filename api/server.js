const express = require('express');

const recipeRouter = require('./recipes/recipe-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipeRouter)

module.exports = server;