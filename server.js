const express = require('express');
const Recipes = require('./data/db-recipe-helper');

const server = express();

const port = 5000;

server.get('/api/recipes', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(() => res.status(500).json({ message: 'There was an error getting the recipes from the database.' }));
});

server.get('/api/recipes/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => res.status(200).json(list))
        .catch(() => res.status(500).json({ message: 'There was an error getting the shopping list from the database.' }));
});

server.get('/api/recipes/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => res.status(200).json(instructions))
        .catch(() => res.status(500).json({ message: 'There was an error getting the instructions for the recipe from the database.' }));
});

server.listen(port, () => {
    console.log(`API Server is running on PORT: ${port}`);
});