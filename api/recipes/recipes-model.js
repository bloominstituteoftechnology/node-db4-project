const db = require('../../data/db-config');

async function getRecipes() {
    const recipes = await db('recipes as r')
    return recipes
}

async function getRecipeById(recipe_id) {

}

module.exports = {
    getRecipes,
    getRecipeById,
};