const express = require("express");

const helmet = require("helmet");
const ingredientsRouter = require("./ingredients/ingredients-router.js");
const recipesRouter = require("./recipes/recipes-router.js");

const server = express();
server.use(helmet());
server.use(express.json());

server.use("/api/ingredients", ingredientsRouter);
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Up and Running" });
});

module.exports = server;
