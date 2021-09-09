const express = require("express")
const server = express()
const recipeEndpoints = require("./recipes/endpoints")

server.use(express.json())
server.use("/api/recipes", recipeEndpoints)

module.exports = server