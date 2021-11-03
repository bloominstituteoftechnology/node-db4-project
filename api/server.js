const express = require("express");
const recipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.use('*', (req, res) => { 
  res.json({ api: 'working' })
})

server.get('/', (req,res) => {
  res.status(200).json({ api: "Intro to Relational Databases" })
});


module.exports = server
