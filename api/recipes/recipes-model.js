const db = require("../../data/db-config");

const getById = async (recipe_id) => {
  const rows = await db("recipes as r")
    .select(
      "r.recipe_id",
      "recipe_name",
      "created_at",
      "s.step_id",
      "s.step_number",
      "s.instructions",
      "i.ingredient_id",
      "si.ingredient_quantity_mg",
      "i.ingredient_name"
    )
    .join("steps as s", "s.recipe_id", "r.recipe_id")
    .leftJoin("steps_ingredients as si", "s.step_id", "si.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .where("r.recipe_id", recipe_id);

  const returnObj = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
  };

  const steps = rows.map((step) => ({
    step_id: step.step_id,
    step_number: step.step_number,
    step_instructions: step.step_instructions,
    ingredients: step.ingredient_id
      ? [
          {
            ingredient_id: step.ingredient_id,
            ingredient_name: step.ingredient_name,
            quantity: step.ingredient_quantity_mg,
          },
        ]
      : [],
  }));

  returnObj.steps = steps;
  return returnObj;
};

module.exports = {
  getById,
};
