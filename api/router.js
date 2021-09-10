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

router.get('/:recipe_id', async (req, res, next) => {
    const { recipe_id } = await req.params
    helpers.getById(recipe_id)
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(next); 
  });

  router.use((err, req,res, next) => {
      res.status(err.status || 500).json({
          customMessage: 'something wrong in the router',
          message: err.message,
          stack: err.stack,
      })
  })
  


module.exports = router;
