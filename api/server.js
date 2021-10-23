const express = require('express')
const server = express()
const router = require('./router')

server.use(express.json())
server.use('/api', router);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
