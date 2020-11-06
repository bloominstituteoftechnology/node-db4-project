const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const recipeRouter = require("./routers/recipes-router");

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use("/api/recipes", recipeRouter);

server.get("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

server.listen(5000, () => {
  console.log("\n ** Server listening on port 5000 ** \n");
});
