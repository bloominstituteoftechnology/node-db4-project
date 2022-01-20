const db = require('../../data/db-config')

async function getRecipe () {
  const recipeRows = await db('recipe as r')

  return recipeRows
}

async function getRecipeById (recipe_id) {
  const recipeRows = await db('recipe as r')
  .where('recipe_id', recipe_id)

  return recipeRows
}

module.exports = {
  getRecipe,
  getRecipeById
}