const db = require('../data/dbconfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('recipes_ingredients as ri', 'r.id', 'ri.recipe_id')
        .join('ingredient_quantity as iq', 'ri.id', 'iq.recipe_ingredient_id')
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .where('r.id', recipe_id)
        .select('i.name', 'ri.ingredient_id', 'iq.amount', 'r.name as recipe_name')
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .join('instructions as i', 'r.id', 'i.recipe_id')
        .orderBy('i.step')
        .select('r.name', 'i.step', 'i.instruction')
}
