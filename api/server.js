const express = require('express');
const recipeRouter = require('./router');
const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
