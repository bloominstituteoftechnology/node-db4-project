const db = require("../data/db-config.js");

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes").where({ id }).first();
}

async function createRecipe(recipe) {
  const [id] = await db("recipes").insert(recipe);
  return getRecipes().where({ id }).first();
}

function deleteRecipes(id) {
  return db("recipes").where({ id }).del();
}

module.exports = {
  getRecipes,
  getRecipesById,
  createRecipe,
  deleteRecipes,
};
