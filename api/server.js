const express = require('express')
const server = express()
const recipeRouter = require('./recipe-router/recipe-router')


server.use('/api/recipes', recipeRouter)


server.use((error, req,res,next)=>{
    res.status(error.status || 500).json({message: error.message || "Server error"})
})


module.exports = server