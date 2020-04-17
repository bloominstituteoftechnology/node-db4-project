const express = require('express');

const recipes = require('./recipe-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    recipes.find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    recipes.findById(id)
    .then(recipe => {
        console.log(recipe);
      const user = recipe[0];
  
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ message: 'Could not find item with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get item' });
    });
  });

  router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;
  
    recipes.findIngredients(id)
      .then(ingredients => {
          //console.log(ingredients);
        res.json(ingredients);
      })
      .catch(err => {
        res.status(500).json({ message: 'problem with the db', error: err });
      });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    recipes.findInstructions(id)
      .then(instructions => {
         // console.log(instructions);
        res.json(instructions);
      })
      .catch(err => {
        res.status(500).json({ message: 'problem with the db', error: err });
      });
  });

  router.get('/ingredients/:id/recipes', (req, res) => {
    const { id } = req.params;
  
    recipes.findRecipeIngredient(id)
      .then(recipes => {
          //console.log(recipes);
        res.json(recipes);
      })
      .catch(err => {
        res.status(500).json({ message: 'problem with the db', error: err });
      });
  });


  module.exports = router;
  