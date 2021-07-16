const express = require("express");

const server = express();

const { getRecipeById } = require("./recipes/recipes-model");

server.use(express.json());

server.get("/api/recipes/:id", (req, res, next) => {
  getRecipeById(req.params.id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    readme: true,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
