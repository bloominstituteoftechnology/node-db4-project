const express = require('express')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(helmet())

/* eslint-disable */
server.use((err, req, res, next) => {
  res.status(err.status
    || 500)
    .json({
      fromTheDev: 'mistakes were made',
      message: err.message,
      stack: err.stack,
    })
})
/* eslint-enable */

server.get('/', (req, res) => {
  res.send(`<h1>More info is needed to continue</h1>`)
})
module.exports = server
