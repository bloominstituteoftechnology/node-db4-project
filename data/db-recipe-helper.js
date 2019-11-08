const db = require('./db');


function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db.select('ingredients.name', 'amount').from('recipe_ingredients')
    .join('ingredients', 'ingredient_id', '=', 'ingredients.id')
    .where('recipe_id', '=', recipe_id);
};

function getInstructions(recipe_id) {
    return db.select('text', 'step_number as step').from('instructions')
                .where('recipe_id', '=', recipe_id);
};

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};