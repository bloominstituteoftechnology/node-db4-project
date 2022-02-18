const express = require('express');
const helmet = require('helmet');
const router = require('./recipes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());



server.use('/api/recipes', router);

server.use('*', (req, res, next) => {
  res.json({ api: 'up '})
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    custom: 'something bad happened.. oops',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;