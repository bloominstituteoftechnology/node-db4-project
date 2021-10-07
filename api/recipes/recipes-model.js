const db = require("../../data/db-config");

async function getById(recipe_id){
  const recipe = await db("recipes as r")
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .where("r.recipe_id", recipe_id)
    .select("r.recipe_name", "s.*")
    .orderBy("s.step_number");

  const result = {
    recipe_id: recipe[0].recipe_id,
    recipe_name: recipe[0].recipe_name,
    steps: [],
  };

  recipe.forEach((row) => {
    if (row.step_id) {
      result.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions,
      });
    }
  })

  return result;
}

module.exports = { getById };