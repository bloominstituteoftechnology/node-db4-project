const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const possibleRecipe = await db("recipes")
    .where("recipe_id", recipe_id)
    .first();
  if (possibleRecipe === undefined) {
    return possibleRecipe;
  }
  const recipes = await db("recipes as r")
    .where("r.recipe_id", recipe_id)
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as si", "st.step_id", "si.step_id")
    .leftJoin("ingredients as in", "si.ingredient_id", "in.ingredient_id")
    .groupBy("st.step_id")
    .orderBy("st.step_number", "asc");

  if (recipes) {
    const finalObj = {
      recipe_id: recipes[0].recipe_id,
      recipe_name: recipes[0].recipe_name,
      created_at: recipes[0].created_at,
      steps: recipes[0].step_number
        ? recipes.map((step) => ({
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.instructions,
            ingredients: [
              {
                ingredient_id: step.ingredient_id,
                ingredient_name: step.ingredient_name,
                quantity: step.quantity,
              },
            ],
          }))
        : [],
    };

    return finalObj;
  } else return null;
}

module.exports = {
  getRecipeById,
};
