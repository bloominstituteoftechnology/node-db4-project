const db = require('../../data/db-config');

async function getRecipes() {
    const recipes = await db('recipes as r')
    return recipes
}

async function getRecipeById(recipe_id) {
    const recipeById = await db('recipes as r')
        .where('r.recipe_id', recipe_id)
    return recipeById
}

module.exports = {
    getRecipes,
    getRecipeById,
};