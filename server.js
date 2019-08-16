const express = require('express');
const helmet = require('helmet');
const RecipeRouter = require('./recipe/recipe-router.js');

const server = express();
server.use(helmet());
server.use(express.json());
server.use('/api/recipe', RecipeRouter);

server.get('/', (req, res) => {
 res.send('<h2>Home Page!</h2>');
});

module.exports = server;
