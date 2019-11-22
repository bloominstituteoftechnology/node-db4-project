const db = require('./../data/db-config.js');

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipes_ingredients')
    .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.ingredient_id')
    .select('recipes_ingredients.ingredient_quantity', 'ingredients.ingredient_name', 'recipes_ingredients.unit')
    .where({ 'recipes_ingredients.recipe_id' : recipe_id });
}

function getInstructions(recipe_id) {
  return db('instructions')
    .where({  recipe_id });
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
