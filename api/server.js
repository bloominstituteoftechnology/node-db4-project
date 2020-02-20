const express = require('express');

const recipeRouter = require('./router/recipeRouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

module.exports = server;