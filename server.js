const express = require('express');
const helmet = require('helmet');
const RecipesRouter = require('./recipes/recipesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipesRouter); 


module.exports = server;