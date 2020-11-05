require("colors");
const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "nice dude" });
});

module.exports = server;
