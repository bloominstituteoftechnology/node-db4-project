const express = require("express");
// const helmet = require("helmet");
const recipesRouter = require("./recipes/router");

const server = express();

// server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipesRouter);

server.use("*", (req, res) => {
  res.json({ api: "running" });
});
// eslint-disable-next-line
// server.use((err, req, res, next) => {
//   res.status(500).json({
//     message: err.message,
//     stack: err.stack,
//   });
// });

module.exports = server;
