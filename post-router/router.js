const express = require('express');

const Recipes = require('./router-model.js');

const router = express.Router();

// router.get('/', (req, res) =>{
//     Recipes.find()
//     .then(recipes =>{
//         if (!recipes){
//             res.status(404).json({error: 'Recipe list not found'})
//         } else {
//         res.json(201).json({message: 'Rendering Recipe List...', recipes})
//     }
//     })
//     .catch(err => {
//         res.status(500).json({error: 'Failed to find the recipe list', err})
//     })
// })

// router.get('/:id', (req, res) => {
//     Recipes.findById(id)
//     .then(recipe => {
//         if(!recipe){
//             res.status(404).json({error: 'Recipe not found'})
//         } else {
//             res.status(201).json({message: 'Recipe found: ', recipe})
//         }
//     })
//     .catch(err => {
//         res.status(500).json({error: 'Failed to find the recipe', err})
//     })
// })

// router.post('/', (req, res) => {
//     const recipeData = req.body;
//     Recipes.add(recipeData)
//         .then(recipe => {
//             if (!recipe) {
//                 res.status(400).json({error: 'Unable to process recipe data'})
//             } else {
//                 res.status(201).json({message: 'Recipe added: ', recipe})
//             }
//         })
//         .catch(err =>{
//             res.status(500).json({error: 'Failed to add the recipe to the list', err})
//         })
// })

// router.put('/:id', (req, res) => {
//     const {id} = req.params;
//     const changes = req.body;

//     Recipes.findById(id)
//         .then(recipe => {
//             if (!recipe) {
//                 res.status(404).json({error: 'Recipe not found with given id.'})
//             } else {
//                 res.status(201).json({message: "Recipe successfully updated."})
//             }
//         })
//         .catch(err => {
//             res.status(500).json({error: 'Failed to update the recipe', err})
//         })
// })

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;

//     Recipes.remove(id)
//     .then(deleted => {
//         if (!deleted) {
//             res.status(400).json({error: 'Could not delete item with given id'})
//         } else {
//             res.status(201).json({message: 'Deleted the recipe'})
//         }
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'Falied to delete the recipe' })
//     })
// })


router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes =>{
        if (!recipes){
            res.status(404).json({error: 'Recipe list not found'})
        } else {
        res.status(201).json({message: 'Rendering Recipe List...', recipes})
    }
    })
    .catch(err => {
        res.status(500).json({error: 'Failed to find the recipe list', err})
    })      
})


router.get('/:id/ingredients', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to get list', data: err });
    });
  });

  router.get('/:id/steps', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Failed to get steps', data: err });
    });
  });


module.exports = router;
