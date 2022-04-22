/* eslint-disable no-unused-vars */
const express = require('express');

const recipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.use('*', (req, res, next) => {
    return res.status(404).json({ message: 'Not Found' });
});

module.exports = server;