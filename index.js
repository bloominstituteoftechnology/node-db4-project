const express = require("express")
const helmet = require("helmet")
const recipeRouter = require("./recipes/recipe-router")
const ingredientRouter = require("./ingredients/ingredient-router")
const stepRouter = require("./steps/step-router")

const server = express()
const port = process.env.PORT || 8080

server.use(helmet())
server.use(express.json())

server.use("/api/recipes", recipeRouter)
server.use("/api/ingredients", ingredientRouter)
server.use("/api/steps", stepRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

server.get('/', (req, res) => {
	res.send('<h3>node-db4-project</h3>');
});