const express = require("express")

const RecipeRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter)

module.exports = server;