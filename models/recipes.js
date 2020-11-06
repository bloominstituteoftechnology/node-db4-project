const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(id) {
  return db("recipes").where({ id }).first();
}

function getShoppingList(recipe_id) {
  return db("recipes_ingredients as ri")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .select("i.name as ingredient", "ri.quantity")
    .where({ "ri.recipe_id": recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions as i")
    .where({ "i.recipe_id": recipe_id })
    .orderBy("i.step_number", "asc");
}
