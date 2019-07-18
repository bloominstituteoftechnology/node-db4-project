const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipe', RecipeRouter);

module.exports = server;
