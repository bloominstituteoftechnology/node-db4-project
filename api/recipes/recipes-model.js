const db = require('../../data/db-config');

exports.getRecipeById = function(recipe_id) {
  return db('recipes')
    .leftJoin('steps','steps.recipe_id','=', 'recipes.id')
    .where({ 'steps.recipe_id': recipe_id })
    .leftJoin('amounts','amounts.step_id','=','steps.id')
    .leftJoin('ingredients','ingredients.id','=','amounts.ingredient_id')
    
};
