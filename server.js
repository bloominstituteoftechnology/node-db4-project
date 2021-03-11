const express = require("express")
const server = express()
const router = require("./api/model/router")

server.use(express.json())
server.use(router)




server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server