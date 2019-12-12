const express = require('express')

//will require the router(s)

const server = express()

server.use(helmet())
server.use(express.json())

module.exports = server;