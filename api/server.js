const express = require("express");

const server = express();
const apiRouter = require("./recipes/router");
server.use(express.json());

server.use("/api/recipes",apiRouter);

module.exports = server;