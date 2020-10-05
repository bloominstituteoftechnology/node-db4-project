const express = require('express'); 

const recipes = require('./recipes-model'); 
const { count } = require('../data/db-config');

const router = express.Router(); 

//! GET all recipes [✅] WORKING
router.get('/', (req, res) => {
    recipes.find()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve recipes" }); 
        });
}); 

//! GET recipes by ID [✅] WORKING
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    recipes.findById(id)
        .then(recipe => {
            if (recipe) {
                res.json(recipe);
            } else {
                res.status(404).json({ message: "Failed to find a recipe with this ID" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve recipe information" }); 
        });
}); 

//! GET shopping list by recipe ID [✅] WORKING
router.get('/:id/shopping-list', (req, res) => {
    const { id } = req.params; 
    recipes.findShoppingList(id)
        .then(items => {
            res.status(200).json({ items }); 
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve a shopping list for this recipe" });
        });
}); 

//! POST a new recipe [✅] WORKING
router.post('/', (req, res) => {
    const newRecipe = req.body; 
    recipes.add(newRecipe)
        .then(recipe => {
            res.status(201).json(recipe); 
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to add new recipe" });
        });
});

//! PUT update a recipe [✅] WORKING
router.put('/:id', (req, res) => {
    const { id } = req.params; 
    const changes = req.body; 

    recipes.findById(id)
        .then(item => {
            if (item) {
                recipes.update(changes, id)
                    .then(updatedItem => {
                        res.json(updatedItem); 
                    });
            } else {
                res.status(404).json({ message: "Failed to update recipe with this ID" }); 
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to update recipe" }); 
        });
}); 

//! DELETE delete a recipe by ID [✅] WORKING
router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    recipes.remove(id)
        .then(count => {
            if (count) {
                res.json({ removed: count }); 
            } else {
                res.status(404).json({ message: "Failed to delete recipe with this ID" }); 
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Error deleting recipe data" }); 
        });
}); 


module.exports = router; 