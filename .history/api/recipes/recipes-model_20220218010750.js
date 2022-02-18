const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
    
    return Promise.resolve(`recipe_${recipe_id}`)
}

module.exports = { getRecipeById }