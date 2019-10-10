const express = require("express");

const recipeRoutes = require("./recipes/recipe-routes");
const ingredientRoutes = require("./ingredients/ingredient-routes");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipeRoutes);
server.use("/api/ingredients", ingredientRoutes);

module.exports = server;