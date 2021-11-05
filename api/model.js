// SELECT * FROM recipes as r
// LEFT JOIN steps as st on r.recipe_id = st.recipe_id
// LEFT JOIN step_ingredients as sti on st.step_id = sti.step_id
// LEFT JOIN ingredients as ing on ing.ingredient_id = sti.ingredient_id
// WHERE r.recipe_id = 3

const db = require("../data/db-config");

async function getById(recipe_id) {
  const rows = await db("recipes as r")
    // .select("r.*")
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as sti", "st.step_id", "sti.step_id")
    .leftJoin("ingredients as ing", "ing.ingredient_id", "sti.ingredient_id")
    .where("r.recipe_id", recipe_id);

  let result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  rows.forEach((item) => {
    if (item.step_id) {
      result.steps.push({
        step_id: item.step_id,
        step_number: item.step_number,
        instructions: item.instructions,
        ingredients: item[0].step_ingredients_id
          ? item.map((res) => ({
              ingredient_id: res.ingredient_id,
              ingredient_name: res.ingredient_name,
              quantity: res.quantity,
            }))
          : [],
      });
    }
  });

  return result;
}

module.exports = {
  getById,
};
