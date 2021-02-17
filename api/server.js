const express = require("express");

const recipeRouter = require("./recipe/recipe-router.js");
const ingredientsRouter = require("./ingredients/ingredients-router");

const server = express();

server.use(express.json());
server.use("/api/ingredients", ingredientsRouter);
server.use("/api/recipes", recipeRouter);

module.exports = server;
