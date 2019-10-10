const db = require("../data/db-config");

module.exports = {
  getIngredients,
  getRecipesByIngredient
}

function getIngredients() {
  return db('ingredients');
}

function getRecipesByIngredient(id) {
  return db('recipe_ingredients as ri')
          .where({ingredient_id:id})
          .join('ingredients as i', 'i.id', 'ri.ingredient_id')
          .select('i.name')
          .join('recipes as r', 'r.id', 'ri.recipe_id')
          .select('r.name');
}