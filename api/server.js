const express = require('express');
const RecipeRouter = require('./recipes/router')

const server = express()

server.use(express.json())
server.use('/api/recipes', RecipeRouter);
server.use((err,req,res,next) => { // eslint-disable-line
    res.status(err.status || 500).json({ message: err.message})
})

module.exports = server