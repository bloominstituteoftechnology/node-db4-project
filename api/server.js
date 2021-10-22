const express = require('express');
const router = require('./router');

const server = express();

server.use(express.json());
server.use('/api', router)

server.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    })
})

module.exports = server;