const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}
function getIngredients() {
  return db("ingredients");
}

function getSteps() {
  return db("steps");
}

function getRecipesById(id) {
  return db("recipes").where({ id }).first();
}

async function createRecipe(recipe) {
  const [recipe_id] = await db("recipes").insert(recipe);
  return getRecipes().where({ recipe_id }).first();
}

function deleteRecipe(recipes_id) {
  return db("recipes").where({ recipes_id }).del();
}

module.exports = {
  getRecipes,
  getIngredients,
  getSteps,
  getRecipesById,
  createRecipe,
  deleteRecipe,
};
