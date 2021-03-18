const express = require('express');

const recipeRouter = require('./recipes/recipe-router');
const ingredientsRouter = require('./ingredients/ingredients-router');

const server = express();

server.use(express.json());
server.use('/api/ingredients', ingredientsRouter);
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

module.exports = server;
