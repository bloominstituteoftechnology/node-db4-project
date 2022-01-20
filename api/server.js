const express = require('express');
//import router file here
const server = express();

server.use(express.json());
// server.use('/api/recipe', recipeRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = server;