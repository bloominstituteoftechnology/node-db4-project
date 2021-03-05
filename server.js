const express = require("express");
const helmet = require("helmet");
//const recipesRouter = require("./routers/")
//const ingredientsRouter = require("./routers/")

const server = express();

server.use(helmet());
server.use(express.json());
//server.use(recipesRouter)
//server.use(ingredientsRouter)
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong on our end. Please try again later.",
  });
});

module.exports = server;
