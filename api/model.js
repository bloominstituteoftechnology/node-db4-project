const db = require('../db-config')

async function getRecipeById(recipe_id){
    const rows = await db('recipes as r').where('r.recipe_id',recipe_id)
    return rows;
}

module.exports = {
    getRecipeById
}