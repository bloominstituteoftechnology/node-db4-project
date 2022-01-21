const express = require('express');
const recipeRouter = require('./recipe-router');
const server = express();

server.use(express.json());
server.use('/api/recipe', recipeRouter);

server.get('*', (req, res) => {
    res.send(`
    <h1>hello world!</h>
    `)
});

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = server;