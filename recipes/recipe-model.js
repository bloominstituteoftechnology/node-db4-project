const db = require('../db-config');

module.exports = {
    get,
    getShoppingList,
    getInstructions
}

function get() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
// select ingredient_name
// from ingredients
// where recipe_id = 1
    return db('ingredients')
        .select('ingredient_name')
        .where('recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
// select step_number, step_text
// from steps
// where recipe_id = 1
    return db('steps')
    .select('step_number', 'step_text')
    .where('recipe_id', recipe_id);
}