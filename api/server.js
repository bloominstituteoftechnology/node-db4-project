const express = require('express')
const router = require('./router')
const server = express()

server.use(express.json())
server.use('/api', router)
server.use((err, req, res,) => {
    res.status(500).json({message: err.message, stack: err.message})
})

module.exports = server