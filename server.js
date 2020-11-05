require("colors");
const express = require("express");
const RecipeRouter = require("./Routers/recipeRouter");
const server = express();
server.use(express.json());
server.use("/recipes", RecipeRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "nice dude" });
});

module.exports = server;
