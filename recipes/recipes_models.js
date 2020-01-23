const db = require("../data/db_Config");

async function getRecipes(query = {}) {
  const { limit = 10, sortby = "id", sortdir = "asc" } = query;

  let rows = await db("recipes")
    .orderBy(sortby, sortdir)
    .limit(limit);

  return rows;
}

function findById(id) {
  return db
    .select("*")
    .from("recipes")
    .where({ id })
    .first();
}

// - [ ] `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - [ ] `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

function getShoppingList(recipe_id) {
  return db("ingredients")
    .select("ingredients.name", "ingredients.quantities", "recipes.name")
    .join("recipes", "recipes.id", "ingredients.recipe_id")
    .where("recipes_id", recipe_id);
}

module.exports = { getRecipes, findById,getShoppingList };
