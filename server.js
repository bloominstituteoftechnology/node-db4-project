const express = require("express");

const recipeRoutes = require("./recipes/recipe-routes");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipeRoutes);


module.exports = server;