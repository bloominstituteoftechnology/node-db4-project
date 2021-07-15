const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use(cors() );
server.use(helmet() );

server.use('/api/recipes', RecipeRouter);

server.use('*', (req, res) => {
    res.status(404).json({ message: "no such endpoint" })
})

server.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        message: err.message,
        sageAdvice: 'Finding the real error is 90% of the bug fix',
        stack: err.stack
    })

    if (status === -1) {
        next();
    }
})

module.exports = server;