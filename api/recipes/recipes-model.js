const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const recipeRows = await db("recipes as r")
    .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
    .leftJoin("steps_ingredients as si", "si.step_id", "s.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "s.step_id",
      "s.step_number",
      "s.step_instructions",
      "i.ingredient_id",
      "i.ingredient_name",
      "si.quantity"
    )
    .where("r.recipe_id", recipe_id);
  return recipeRows;
}

module.exports = { getRecipeById };
