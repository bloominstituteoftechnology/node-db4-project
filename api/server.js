const express = require("express");
const helmet = require("helmet");

const recipeRouter = require("../recipes/recipe-router.js");
// const ingredientRouter = require("../recipes/ingredient-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipeRouter);
// server.use("/api/ingredients", ingredientRouter);

module.exports = server;
