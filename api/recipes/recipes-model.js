const db = require('../../data/db-config');


async function getRecipeById (recipe_id) {
  const recipeRow = await db('recipes as r')
    .where('recipe_id', recipe_id);
  return recipeRow;
}

module.exports = {
  getRecipeById,
};