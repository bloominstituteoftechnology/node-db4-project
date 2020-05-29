const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes as R')
        .join('ingredients as I', 'R.ingredients_id', 'I.id')
        .where('R.id', '=', id)
        .select('R.recipe_name', 'I.unit')
}

function getInstructions(id) {

    return db('recipes as R')
        .join('instructions as I', 'R.instructions_id', 'I.id')
        .join('steps as S', 'I.id', 'S.instructions_id')
        .where('R.id', '=', id)
        .select('R.recipe_name', 'S.step')
        .orderBy('S.id')
}
