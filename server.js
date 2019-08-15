const express = require("express");
const server = express();
const RecipeRouter = require("./recipe-router");

server.use(express.json());
server.use("/api/recipes", RecipeRouter);

server.get("/", (req, res) => {
  res.send("Hello from /");
});

module.exports = server;
