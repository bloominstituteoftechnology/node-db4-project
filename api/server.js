//Imports
const express = require('express');
const helmet = require('helmet');
const helper = require('./recipe-model')


//Instance Of Express App
const server = express();


//Calling Middleware
server.use(helmet());
server.use(express.json());


//Endpoints
server.get('/', (req, res, next) => {
    
})

//Error-Handling Middleware
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});


//Exports; Exposing
module.exports = server;