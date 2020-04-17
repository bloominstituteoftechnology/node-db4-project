const express = require('express');

const recipieRouter = require('');

const server = express();

server.use(express.json());

server.use('/api/recipies', recipieRouter);

module.exports = server;