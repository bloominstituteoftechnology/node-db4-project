// const db = require('../../data/db-config');

async function getRecipeById(recipe_id){
    // const recipeRows = await db('recipes as r')
    //     .where('recipe_id', recipe_id);
    // return recipeRows;
    return Promise.resolve(`Here's your recipe id ${recipe_id}`);//stubb
}

module.exports = {getRecipeById};