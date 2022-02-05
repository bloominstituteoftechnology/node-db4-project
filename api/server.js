const express = require('express')
const recipesRouter = require('./recipes/recipes-router')
const server = express()

server.use(express.json())
server.use('/api', recipesRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message, 
        stack: err.stack
    })
})

module.exports = server