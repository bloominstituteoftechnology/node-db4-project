const express = require("express");
const recipeRouter = require("./routers/recipes");
const ingredientsRouter = require("./routers/ingredients");

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

server.use(recipeRouter);
server.use(ingredientsRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: "Something went wrong",
	});
})

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
})