const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipies', (req, res) => {
    //get all recipies
    db('recipies')
    .then(recipies => {
        res.status(200).json(recipies);
    })
    .catch(error => {
        res.status.json(500).json({error : error.message})
    })
});

server.get('/api/ingredients', (req, res) => {
    // get all ingredients from the database
    // include species name
    db('ingredients as i')
      .leftJoin('recipies as r', 'r.id', 'i.recipies_id')
      .select('i.id', 'i.ing_name', 'r.recipies_name')
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });
