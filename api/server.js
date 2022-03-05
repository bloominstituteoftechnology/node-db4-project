const express = require('express')
const recipesRouter = require('./recipes/recipes-router')
// pull in server
const server = express()
// trick out express
server.use(express.json())




server.use('/api/recipes', recipesRouter)

// Global endpoint for testing
server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server 