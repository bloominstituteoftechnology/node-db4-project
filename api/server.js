const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan');
const server = express()
const recipesRouter = require('./recipes/router')

// Configure your server here
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

// Build your recipe router
server.use('/api/recipes', recipesRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Not Found'
    })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      custom: "Something is wrong",
      message: err.message,
      stack: err.stack,
    });
    next()
  });

module.exports = server