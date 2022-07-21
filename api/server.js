const express = require("express");
const recipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());

// server.use((err, req, res, next) => {
//   // eslint-disable-line

//   res.status(500).json({
//     message: err.message,
//     stack: err.stack,
//   });
// });

server.use("/api/recipes", recipesRouter);
server.use("*", (req, res) => {
  res.json({ api: "up" });
});
module.exports = server;
