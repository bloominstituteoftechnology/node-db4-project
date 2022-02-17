const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

async function getRecipeById(recipe_id) {
    return db('recipes')
    .where({ recipe_id });
}

module.exports = {
    getRecipes,
    getRecipeById
}