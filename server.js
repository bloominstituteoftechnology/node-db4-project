const express = require("express");
const RecipeRouter = require("./routers/recipe-router");

const server = express();

server.use(express.json());
server.use("/recipe", RecipeRouter);

module.exports = server;