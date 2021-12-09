const db = require('../data/db-config.js');

function getRecipes() {
  return db('recipes');
}

async function getRecipesById(recipe_id) { // INCLUDING SPECIES NAME
  const rows = await db('recipes')
    .where('recipe_id', recipe_id)

  return rows
}


module.exports = {
  getRecipes,
  getRecipesById,
};
