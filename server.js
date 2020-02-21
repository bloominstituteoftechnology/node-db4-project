const express = require('express');

const db = require('./data/db-helpers.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
   db.getRecipes()
      .then(recipes => {
         res.status(200).json(recipes);
      })
})

server.get('/:id', (req, res) => {
   db.getInstructions(req.params.id)
      .then(recipes => {
         res.status(200).json(recipes);
      })
      .catch(error => {
         res.status(500).json({message: 'problem getting steps', error})
      })
})

server.get('/:id/shoppinglist', (req, res) => {
   db.getShoppingList(req.params.id)
      .then(ingredients => {
         res.status(200).json(ingredients);
      })
      .catch(error => {
         res.status(500).json({ message: 'problem getting ingredients', error })
      })
})

module.exports = server;