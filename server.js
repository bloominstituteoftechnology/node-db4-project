const express = require('express');

const RecipeRouter = require('./api/recipes/recipe-router.js');
const IngredientRouter = require('./api/ingredients/ingredient-router.js');
const StepsRouter = require('./api/steps/steps-router.js');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the API of Sprint 12 Lecture 4 Challenge</h2>`);
});

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);
server.use('/api/steps', StepsRouter);

module.exports = server;
