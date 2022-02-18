const express = require('express');
const recipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());

server.use('/api', recipeRouter);

server.get('/api', (req, res) => {
    res.send('<h1>Hello from server.js</h1>');
});

module.exports = server;