const express = require('express')

const recipesRouter = require('./OURRECIPES/recipes-router')
const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)
server.use('*', (req, res) => {
    res.json({ api: 'API Is Running'})
})

module.exports = server