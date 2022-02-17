const express = require("express");
const server = express();
server.use(express.json());

server.use("/", (req, res) => {
  console.log("working");
});

module.exports = server;
