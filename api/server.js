const express = require("express");

const RecipesRouter = require("./recipes/recipes-router.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "We up and running my dude!" });
});

module.exports = server;
