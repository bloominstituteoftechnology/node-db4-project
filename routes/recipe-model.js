const db = require("../data/db-config");

module.exports = {
  getRecipes,
  findById,
  update,
  remove,
  addRecipe,
  getShoppingList,
};
//This returns only the recipes name nothing else
function getRecipes() {
  return db("recipes");
}

function findById(id) {
  return db("recipes").where({ id });
}

function update(id, changes) {
  return db("recipes").where({ id }).update(changes);
}

function remove(id) {
  return db("recipes").where({ id }).delete();
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then((res) => {
      const id = res[0];
      return findById(id);
    });
}

// select recipes.name,
// ingredients_list.ingredient_amount,
// ingredients.name as Ingredient
// from recipes
// join instructions on instructions.recipe_id = recipes.id
// join ingredients_list on instructions.id = ingredients_list.instruction_id
// join ingredients on ingredients_list.ingredient_id = ingredients.id
// Where recipes.id =  2
function getShoppingList(id) {
  return db("recipes")
    .join("instructions", "instructions.recipe_id", "=", "recipes.id")
    .join(
      "ingredients_list",
      "instructions.id",
      "=",
      "ingredients_list.instruction_id"
    )
    .join(
      "ingredients",
      "ingredients_list.ingredient_id",
      "=",
      "ingredients.id"
    )
    .select(
      "recipes.name",
      "ingredients_list.ingredient_amount",
      "ingredients.name as Ingredient"
    )
}
