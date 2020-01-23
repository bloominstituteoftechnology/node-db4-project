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

function getShoppingList(recipe_id) {
  return db("ingredients")
    .select(
      { ingredient_Name: "ingredients.name" },
      "ingredients.quantities",
      {
        recipes_id: "recipes.id"
      },
      { recipe_Name: "recipes.name" },
      "ingredients_recipes.recipe_id"
    )
    .join("recipes", "recipes.id", "ingredients_recipes.recipe_id")
    .join("ingredients_recipes", "ingredients_recipes.id", "ingredients.id")
    .where("recipe_id", recipe_id);
}

// - [ ] `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe

// - [ ] `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

function getInstructions(recipe_id) {
  return db("steps")
    .select(
      {
        recipe_name: "recipes.name"
      },
      "steps.instructions",
      "steps.step_number",
      "steps.id"
    )
    .join("recipes", "recipes.id", "steps.recipe_id")
    .where("recipe_id", recipe_id);
}

module.exports = { getRecipes, findById, getShoppingList, getInstructions };
