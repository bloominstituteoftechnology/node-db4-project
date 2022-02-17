const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

async function getRecipeById(recipe_id) {
    return db('recipes');
    // const result = await db()
}

module.exports = {
    getRecipes,
    getRecipeById
}