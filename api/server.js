const express = require("express");
const server = express();
server.use(express.json());
const router = require("./router");

server.use("/api/recipes", router);

// server.use("/", (req, res) => {
//   console.log("working");
// });

module.exports = server;
