const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("*", (req, res) => {
  res.json({ api: "running" });
});

module.exports = server;
