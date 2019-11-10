const express = require('express');
const recipesRouter = require('./recipes/recipes-router');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.use('/api/recipes', recipesRouter);
server.use('/', (req, res) => {
    res.send('Welcome!!')
});

// 

module.exports = server;