const express = require('express'); 

const recipes = require('./recipes-model'); 

const router = express.Router(); 

//! GET all recipes
router.get('/', (req, res) => {
    recipes.find()
        .then(cards => {
            res.json(cards);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve recipes" }); 
        });
}); 

module.exports = router; 