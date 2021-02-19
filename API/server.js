const express = require("express");
const helmet = require("helmet");
const router = require('./router/router');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/router', router);
server.get("/", (req, res) => {
  res.json({ message: "API is online!" });
});

module.exports = server;
