const express = require('express');
const server = express();
const recipesRouter = require('./recipes/recipes-router.js');

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to the Recipe Book API</h1>');
});

module.exports = server;
