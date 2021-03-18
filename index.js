const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const router = require("./recipes/recipes_router")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(router)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})