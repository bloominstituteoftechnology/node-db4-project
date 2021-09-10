//Imports
const express = require('express');
const helmet = require('helmet');
const Helper = require('./recipe-model')


//Instance Of Express App
const server = express();


//Calling Middleware
server.use(helmet());
server.use(express.json());


//Endpoints
server.get('/:recipe_id', (req, res, next) => {
  const { recipe_id } = req.params

  Helper.getRecipeById(recipe_id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(next)
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