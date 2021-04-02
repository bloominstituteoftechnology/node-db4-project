const express = require('express')
const recipeRouter = require('./router');

const server = express()

server.use(express.json())
server.use('/api/recipes', recipeRouter)

server.get('/', (req,res) => {
  console.log('hole crap from scratch!')
})

module.exports = server;