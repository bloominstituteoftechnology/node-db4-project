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
    .orderBy("s.step_number")
    .where("r.recipe_id", recipe_id);

  /**
      {
        "ingredient_id": 3,
        "ingredient_name": "Pasta",
        "quantity": 2,
        "recipe_id": 1,
        "recipe_name": "Broccoli Pesto Pasta",
        "step_id": 3,
        "step_instructions": "Add pesto mixed with pasta",
        "step_number": 3
      }
     */

  const recipes = {
    recipe_id: recipeRows[0].recipe_id,
    recipe_name: recipeRows[0].recipe_name,
    steps: recipeRows.reduce((acc, row) => {
      if (!row.ingredient_id) {
        // it's a new step without any ingredients
        return acc.concat({
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
        });
      }
      if (
        row.ingredient_id &&
        !acc.find((step) => step.step_id === row.step_id)
      ) {
        // it's a new step with an ingredient
        return acc.concat({
          step_id: row.step_id,
          step_number: row.step_number,
          step_instructions: row.step_instructions,
          ingredients: [
            {
              ingredient_id: row.ingredient_id,
              ingredient_name: row.ingredient_name,
              quantity: row.quantity,
            },
          ],
        });
      }
      // it's a step we have encountered before
      const currentStep = acc.find((step) => step.step_id === row.step_id);
      currentStep.ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      });
      return acc;
    }, []),
  };
  return recipes;
}

module.exports = { getRecipeById };
