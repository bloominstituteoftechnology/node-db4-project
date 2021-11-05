const express = require('express');
const router = require('./recipes/recipes-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', router)

server.use((err, _, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = server;