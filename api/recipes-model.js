const db = require('../db-config')


async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipe as r')
    .where('recipe_id', recipe_id)


    return recipeRows

}


module.exports = {
    getRecipeById,
}