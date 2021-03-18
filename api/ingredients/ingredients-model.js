const db = require('../../data/db-config');

function getRecipes(ingredient_id) {
  return db('recipe_ingredients as r')
    .join('ingredients as i', 'r.ingredient_id', 'i.ingredient_id')
    .where('i.ingredient_id', ingredient_id);
}

module.exports = { getRecipes };
