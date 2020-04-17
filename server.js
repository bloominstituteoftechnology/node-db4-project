const express = require('express');

const Router = require('./post-router/router');

const server = express();

server.use(express.json());
server.use('/api/recipes', Router);

//sanity test
server.get('/', (req, res) => {
    res.status(200).json({api: 'green light'});
});

module.exports = server;