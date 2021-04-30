const express = require("express")
const recipeRouter = require("./routers/router")

const server = express()

server.use(express.json())
server.use(recipeRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server