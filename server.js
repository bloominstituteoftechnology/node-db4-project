const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const RecipeRouter = require("./routers/recipes-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/recipes", RecipeRouter);
//server.use("/api/ingredients", IngredientsRouter);

server.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
}

module.exports = server;
