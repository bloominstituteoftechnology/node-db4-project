const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    //return Promise.resolve(`aweomse recipe ${recipe_id}`)
    const recipeRows = await db('recipes as r')
        .where('recipe_id', recipe_id)

    return recipeRows
}

module.exports = { getRecipeById }
