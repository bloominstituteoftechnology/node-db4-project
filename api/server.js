const express = require("express");
const recipesRouter = require("./recipes/recipes-router");

const server = express(); //instantiate the server by invoking express

server.use(express.json()); //teach server to parse JSON

server.use("/api/recipes", recipesRouter);

server.use("*", (req, res) => {
  //test if routing working with catchall endpoint
  res.json({ api: "up" });
});

module.exports = server;
