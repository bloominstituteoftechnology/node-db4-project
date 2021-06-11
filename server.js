const express = require("express");

const RecipesRouter = require("./recipes/recipes-router.js");
const IngredientsRouter = require("./ingredients/ingredients-router.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipesRouter);
server.use("/api/ingredients", IngredientsRouter);

server.get("/", (req, res) => {
	res.send(`<h2>DB 4 Project!</h2>`);
});

module.exports = server;
