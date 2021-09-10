const express = require('express');
const recipesRouter = require('./recipes/recipes-router')
const helmet = require('helmet');

const server = express();

server.use(helmet()); // Using for security
server.use(express.json());
server.use('/api/recipes', recipesRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
})

module.exports = server