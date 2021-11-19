
const express = require('express')

const recipeRouter = require('./recipes/recipe-router')

const server = express()
require('colors')


server.use(express.json())

server.use('/api/recipes', recipeRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up' })
})

module.exports = server; 
