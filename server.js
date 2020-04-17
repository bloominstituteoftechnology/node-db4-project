const express = require('express');
const helmet = require('helmet');

const UserRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', UserRouter);

module.exports = server;