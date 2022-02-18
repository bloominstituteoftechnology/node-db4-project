const express = require('express');
const helmet = require('helmet');
const router = require('./recipe-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipe', router);

server.use('*', (req, res) => {
    res.json({ api: 'up' })
})


module.exports = server;