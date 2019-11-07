const router = require('express').Router();
const R = require('./recipes-model.js');

router.get('/', (req, res) => {  
    const query = req.query;
    Hubs.find(query)
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the recipes',
        });
      });
  });