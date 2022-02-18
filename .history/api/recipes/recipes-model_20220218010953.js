const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
    .where('rec')

    return recipeRows
}

module.exports = { getRecipeById }