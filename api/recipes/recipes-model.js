const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const recipes = await db("recipes as r").where("recipe_id", recipe_id);
  return recipes;
}

module.exports = {
  getRecipeById,
};
