const express = require('express')

const RecipeRouter = require('./recipe/recipe-router.js')
const server = express()

server.use(express.json());
server.use('/api/recipe', RecipeRouter)


server.get('/', (req, res) => {
    res.send('Server is Running...')
})
module.exports = server;