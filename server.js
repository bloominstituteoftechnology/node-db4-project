const express = require('express');
const recipeRouter = require('./recipes/recipe-router');


const server = express();

server.use(express.json());

server.use("/recipes", recipeRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's get some recipes!</h2>`);
});


module.exports = server;