const express = require("express")
const server = express()
const recipeEndpoints = require("./recipes/endpoints")

server.use(express.json())
server.use("/api/recipes", recipeEndpoints)

server.use((err, req, res, next) => {
    const { status, message, stack } = err
    res.status(status || 500).json({
        message,
        stack
    })
})

module.exports = server