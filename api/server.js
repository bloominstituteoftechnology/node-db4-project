const express = require("express");
const helmet = require("helmet");
const recipesRouter = require("./router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api", recipesRouter);

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
