const dbConfig = require("../../data/db-config");

function getRecipes(){
  return dbConfig('recipes')
    .select('recipe_name')
}
function getShoppingList(recipe_id){
  return dbConfig('steps')
    .select('ingredients.ingredient_name')
    .leftJoin('ingredients','steps.ingredient_id', 'ingredients.ingredient_id')
    .where('steps.recipe_id', recipe_id)
    .orderBy('steps.step_number', 'asc')
}

module.exports = {
  getRecipes,
  getShoppingList,
}
