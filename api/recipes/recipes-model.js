const db = require("../../data/dbConfig")

async function getRecipeById(id) {
  const rows = await db("recipes as r")
    .select(
      "r.*",
      "st.step_id as step_id",
      "st.step_number",
      "st.step_text",
      "si.ingredient_id",
      "ingredient_name",
      "quantity"
    )
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as si", "st.step_id", "si.step_id")
    .leftJoin("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .where("r.recipe_id", id)
    .orderBy("st.step_number")

  const recipe = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    steps: [],
  }

  rows.forEach((row) => {
    if (row.step_id) {
      recipe.steps[row.step_number - 1] = {
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.step_text,
      }
    }
  })

  rows.forEach((row) => {
    if (row.ingredient_id) {
      if (!recipe.steps[row.step_number - 1].ingredients) {
        recipe.steps[row.step_number - 1].ingredients = []
      }
      recipe.steps[row.step_number - 1].ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      })
    }
  })

  return recipe
}

module.exports = {
  getRecipeById,
}
