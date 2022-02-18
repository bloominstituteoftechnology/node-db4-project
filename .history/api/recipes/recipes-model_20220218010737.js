const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as ')
    return Promise.resolve(`recipe_${recipe_id}`)
}

module.exports = { getRecipeById }