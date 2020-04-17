const db = require("../data/seeds/dbConfig");

function getAll() {
  return db("recipes");
}

function getById(recipe_id) {
  return db("recipes").where({ id: recipe_id }).first();
}

function add(recipe) {
  return db("recipes").insert(recipe);
}

function update(recipe_id, recipe) {
  return db("recipes").where({ id: recipe_id }).update(recipe);
}

function remove(recipe_id) {
  return db("recipes").where({ id: recipe_id }).del();
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

function addToShoppingList(item) {
  return db("recipes_ingredients").insert(item);
}

function getInstructions(recipe_id) {
  return db("instructions").where({ recipe_id });
}

module.exports = {
  add,
  getAll,
  getById,
  getShoppingList,
  getInstructions,
  update,
  remove,
  addToShoppingList,
};