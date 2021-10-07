const express = require('express');

const server = express();

server.use(express.json());

//server.use('./api/recipes, RecipeRouter);

module.exports = server;
