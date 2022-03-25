const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  const rows = await db("recipes")
    .select("recipe_id", "recipe_name", "created_at")
    .leftJoin("steps as st", "sc.scheme_id", "st.scheme_id")
    .leftJoin("ingredients as i", "sc.scheme_id", "i.scheme_id")
    .where("recipe_id", recipe_id)
    .orderBy("st.step_number");

  if (rows.length == 0) {
    return null;
  }

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: rows
      .filter((e) => e.step_id != null)
      .map((e) => ({
        step_id: e.step_id,
        step_number: e.step_number,
        step_instructions: e.step_instructions,
      })),
  };

  return result;
}

module.exports = {
  getRecipeById,
};
