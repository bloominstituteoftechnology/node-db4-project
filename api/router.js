const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  helpers.getAll()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next); 
});

router.get('/:id', (req, res, next) => {
    helpers.getById()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(next); 
  });
  


module.exports = router;
