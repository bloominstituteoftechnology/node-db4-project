const express = require('express');

const helmet = require('helmet');
const RecipeRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', RecipeRouter);
//server.use('/api/ingredients', IngredientsRouter);

module.exports = server;
