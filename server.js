require("colors");
const express = require("express");
const helmet = require("helmet");
const RecipeRouter = require("./routers/recipe-router");

const server = express();
// const db = require("./data/db-config.js");

server.use(helmet());
server.use(express.json());
server.use("/recipe", RecipeRouter);

module.exports = server;
