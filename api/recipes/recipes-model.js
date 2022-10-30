const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipesRows = await db('recipes as r')
        .where('recipe_id', recipe_id)
    return recipesRows 
}

module.exports = {
    getRecipeById
}