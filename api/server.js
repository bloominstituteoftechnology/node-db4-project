const express = require('express');

const RecipeRouter = require('./router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.use('*', (req, res) => {
    res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

server.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message });
});

module.exports = server;
