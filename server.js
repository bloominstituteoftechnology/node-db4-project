const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the API of Sprint 12 Lecture 4 Challenge</h2>`);
});

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;
