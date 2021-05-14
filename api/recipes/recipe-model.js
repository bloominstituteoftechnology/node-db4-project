const db = require("../../data/db-config.js");

function findRecipes() {
  return db("recipes");
}

async function getRecipeByID(recipe_id) {
  const results = await db
    .select("r.*", "st.*")
    .from("recipes as r")
    .leftJoin("steps as st", "st.recipe_id", "=", "r.recipe_id")
    .where("r.recipe_id", recipe_id);

  const final = await results.reduce(async (acc, step) => {
    const { recipe_name, created_at, step_id, step_number, step_instruction } =
      step;

    const stepIngredients = await db
      .select(
        "sti.quantity",
        "sti.ingredient_id",
        "i.ingredient_name",
        "i.units"
      )
      .from("step_ingredients as sti")
      .join("ingredients as i", "i.ingredient_id", "=", "sti.ingredient_id")
      .where("sti.step_id", step_id);

    if (!step.step_id) {
      return {
        recipe_id: parseInt(recipe_id),
        recipe_name,
        created_at,
        steps: [],
      };
    } else if ((await acc).steps) {
      (await acc).steps.push({
        step_id,
        step_number,
        step_instruction,
        ingredients: stepIngredients,
      });
    } else {
      acc = {
        recipe_id: parseInt(recipe_id),
        recipe_name,
        created_at,
        steps: [
          {
            step_id,
            step_number,
            step_instruction,
            ingredients: stepIngredients,
          },
        ],
      };
    }
    console.log(acc);
    return acc;
  }, {});
  return final;
}

module.exports = { getRecipeByID, findRecipes };
