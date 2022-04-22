const express = require('express')

const server = express()

const recipesRouter = require('./recipes/recipes-router')

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up' })
})

server.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;