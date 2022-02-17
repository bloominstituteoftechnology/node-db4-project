const express = require('express');
const helmet = require('helmet');
const router = require('./recipe-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', router);

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;