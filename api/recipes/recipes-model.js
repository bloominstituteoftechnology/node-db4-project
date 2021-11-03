const db = require('../../data/db-config')

module.exports = {
  getRecipeById,
}


async function getRecipeById(recipe_id) {
  const result = await db('recipes').where('recipe_id',recipe_id)
  return result
}
