const db = require("./data/db-config")

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db("recipes as r")
  .select('r.id as recipe_id', 'r.recipe_name', 'i.ingredient_name', 're.quantity')
  .join('recipe_ingredients as re', 'r.id', 're.recipe_id')
  .join('ingredients as i', 're.ingredient_id', 'i.id' )
  .where({'r.id': recipe_id})
}

function getInstructions(recipe_id) {

  return db("recipes as r")
    .select("s.id as step", "r.id as recipe_id", "s.instruction")
    .innerJoin("steps as s", "s.recipe_id", "r.id")
    .where("r.id", recipe_id)
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}