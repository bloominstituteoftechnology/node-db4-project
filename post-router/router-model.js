const db = require('../data/db-config');

function find() {
    return db('recipes');
}

function findById(id) {
    return db('recipes').where({ id: Number(id) });
}

function add(recipe) {
    return db('recipes')
        .insert(posts, 'id')
        .then(ids => ({id: ids[0]}));
}

function update(id, recipe) {
    return db('recipes')
        .where('id', Number(id))
        .update(recipe);
}

function remove(id) {
    return db('recipes')
        .where("id", Number(id))
        .del();
}

function getRecipes() {
    return db('recipes')
  }

  function getRecipeIngredients(id) {
    return db
      .select('recipes.name')
      .from('recipes')
      .join('recipe_ingredients', 'recipes.id', 'recipe_ingredients.recipeId')
      .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredientId')
      .where('ingredients.id', '=', id)
  }
  
function getShoppingList(recipeId) {
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredientId', 'ingredients.id')
        .select('ingredients.name', 'recipe_ingredients.quantity', 'recipe_ingredients.unit')
        .where('recipe_ingredients.recipeId', '=', recipeId)
}

function getInstructions(recipeId) {
    return db
    .select('step_number', 'instruction')
    .from('instructions')
    .where({recipeId})
  }

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getRecipes,
    getRecipeIngredients,
    getShoppingList,
    getInstructions
}