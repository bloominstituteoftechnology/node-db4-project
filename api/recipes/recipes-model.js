const db = require("../../data/db-config");

const getRecipeById = async (id) => {
  const recipe = await db("recipes")
    .select("*")
    .leftJoin("steps", "recipes.recipe_id", "steps.recipe_id")
    .leftJoin("ingredient_steps", "steps.step_id", "ingredient_steps.step_id")
    .leftJoin(
      "ingredients",
      "ingredient_steps.ingredient_id",
      "ingredients.ingredient_id"
    )
    .where({ "recipes.recipe_id": id })
    .orderBy("step_number");
    return {
        recipe_id: Number(id),
        recipe_name: recipe[0].recipe_name,
        created_at: recipe[0].created_at,
        steps: recipe.map((step) => {
            const ingredient = {
              ingredient_id: step.ingredient_id,
              ingredient_name: step.ingredient_name,
              quantity: step.quantity,
            }
            return {
                step_id: step.step_id,
                step_number: step.step_number,
                step_instructions: step.instruction,
                ingredients: [ingredient]
            }
        }).filter(step => step.step_id !== null)
    };
};

module.exports = { getRecipeById };
