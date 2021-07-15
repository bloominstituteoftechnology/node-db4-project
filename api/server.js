const express = require('express');
const recipesRouter = require('./recipes/recipes-router')

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter)

server.use('*', (req, res, next) => {
    next({status: 404,
        message: 'not found'
    })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server;