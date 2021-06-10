const express = require('express')
const router = require('./recipes/router')

const server = express()

server.use(express.json())
server.use('/api/recipes', router)

module.exports = server