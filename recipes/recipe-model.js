const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients as ri')
          .where({recipe_id: recipe_id})
          .join('ingredients as i', 'i.id', 'ri.ingredient_id')
          .select('i.name', 'ri.quantity')
}

function getInstructions(recipe_id) {
  return db('steps as s')
    .where({recipe_id: recipe_id})
    .join('recipes as r', 'r.id', 's.recipe_id')
    .select('s.id','s.step_number','r.name','s.description')
    .orderBy('s.step_number');
}