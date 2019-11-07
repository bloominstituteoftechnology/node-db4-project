const express = require('express');

const RecipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(express.json());

server.use('/recipes', RecipesRouter);

server.get('/', (req, res) => {
  res.send('<h3>Lambda Project</h3>');
});

module.exports = server;