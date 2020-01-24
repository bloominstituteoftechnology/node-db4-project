const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db.select('*').from('recipe_book');
}

function getShoppingList(recipe_id) {
    return db('ingredients')
    .join('recipe_book', 'ingredients.ingredient_name', 'recipe_book.quantity')
    
}