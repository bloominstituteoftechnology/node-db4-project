const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  return `getting recipe by id ${recipe_id}`;
}

module.exports = {
  getRecipeById,
};
