const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes")
    .join("recipe_ingredients", "recipe_ingredients.recipe_id", "recipes.id")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .select("ingredients.ingredient_amount", "ingredients.ingredient_name")
    .where("recipes.id", id);
}

function getInstructions(id) {
  return db("recipes")
    .join("steps", "recipes.id", "steps.recipe_id")
    .select("steps.step_number", "steps.description")
    .where("recipes.id", id);
}
