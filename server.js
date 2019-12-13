const express = require('express')
const helmet =require('helmet')

const recipeRouter = require('./recRouter/recipeRouter');

const server =express()

server.get('/', (req, res) => {
    res.json({ message: "server is looking for a recipe" })
})

server.use(helmet())
server.use(express.json())
server.use('/api/recipes', recipeRouter)
module.exports = server;
