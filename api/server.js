const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan');
const server = express()
const recipesRouter = require('./recipes/recipes-router')

// Configure to server here
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

// link to recipe router
server.use('/api/recipes', recipesRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Recipe Not Found'
    })
})

module.exports = server;