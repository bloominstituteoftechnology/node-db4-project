const db = require("./../data/db-config.js");

function getAll() {
  return db("recipes");
}

function getById(recipe_id) {
  return db("recipes").where({ id: recipe_id }).first();
}

function getShoppingList(recipe_id) {
  return db("recipes_ingredients")
    .join("ingredients", "recipes_ingredients.ingredient_id", "ingredients.id")
    .select(
      "recipes_ingredients.ingredient_quantity",
      "ingredients.name",
      "recipes_ingredients.unit"
    )
    .where({ "recipes_ingredients.recipe_id": recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions").where({ recipe_id });
}

module.exports = {
  getAll,
  getById,
  getShoppingList,
  getInstructions,
};
