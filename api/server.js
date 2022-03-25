const express = require("express");
const recipesRouter = require("./router");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/recipes", recipesRouter);

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.use("*", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
