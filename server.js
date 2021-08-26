const express = require('express')
const recipesRouter = require('./api/recipes-router')
server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)