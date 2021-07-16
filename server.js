const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const recipesRouter = require('./recipes/router')
const ingredientsRouter = require('./ingredients/router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//error handling middleware
server.use((err, req, res, next) => {//eslint-disable-line
  res.status(500).json({ error: err, message: err.message })
})

server.use(express.static('public'))
server.use("/api/auth", ingredientsRouter)
server.use("/api/recipes", recipesRouter)
server.use("/api/ingredients", ingredientsRouter)

module.exports = server