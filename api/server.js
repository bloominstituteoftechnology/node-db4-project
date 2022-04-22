const express = require('express');
const router = require('./router');

const server = express();

server.use('/api/recipes', router);

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;