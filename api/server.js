const express = require('express')
const recipeRouter = require('./recipe/recipe-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipeRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up'})
})

module.exports = server