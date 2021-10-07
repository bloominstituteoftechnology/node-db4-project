const express = require("express");
const router = require("./recipes/recipes-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", router);

server.use("*", (req, res, next) => {
  next({ status: 404, message: "sorry not found" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
