const express = require('express');

const recipesRouter = require("./recipes/recipe-router.js");
const ingredientsRouter = require("./recipes/ingredient-router.js");

const server = express();

server.use(express.json());

server.use("/recipes", recipesRouter);
server.use("/ingredients", ingredientsRouter);

module.exports = server;