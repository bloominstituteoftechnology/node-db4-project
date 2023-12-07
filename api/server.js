const express = require("express");
const recipesRouter = require("./recipes/recipes-router.js");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

module.exports = server;
