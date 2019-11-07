const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,  
    getInstructions
  };

  function getRecipes() {
    return db
    .select('*')
    .from('recipes')
}
  
function getShoppingList(recipe_id) {
    return db
    .select('ingredients.name')
    .from('recipes')
    .join('ingredients', 'recipes.id', 'ingredients.recipes_id')
    .where('recipes.id', '=', recipe_id)
}

function getInstructions(recipe_id) {
    return db
    .select('steps.info')
    .from('recipes')
    .join('steps', 'recipes.id', 'steps.recipes_id')
    .where('recipes_id', '=', recipe_id)
}