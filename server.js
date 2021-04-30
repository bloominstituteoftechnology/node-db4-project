const express = require("express")
const server = express()
const recipeRouter = require("./routers/recipe-router")

server.use(express.json())
server.use(recipeRouter)


server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server