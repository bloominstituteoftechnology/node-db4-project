const db = require("../data/dbConfig");

function getRecipes() {
  return db("recipes");
}

async function getShoppingList(recipe_id) {
  return db("ingredients")
  .join("measurements", "ingredients.id", "measurements.ingredients_id")
  .select("ingredients.id", "ingredients.ingredient_name", "measurements.quantity")
  .where({recipe_id})
}

function getInstructions(recipeId) {
  return db("recipe_steps")
  .where("recipe_id", recipeId)
  .orderBy("step_count", "asc")
}



module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
