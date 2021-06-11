const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step')
        .where('recipe_id', recipe_id)
    
        return recipeRows
}

module.exports = { getRecipeById }