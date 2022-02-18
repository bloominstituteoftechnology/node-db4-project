const db = require("../data/db.config");

function get() {
  return db("recipes");
}

async function getById(recipe_id) {
  const result = await db("recipes as r")
    .leftJoin("steps as s", "s.recipe_id", "r.recipe_id")
    .leftJoin("step_ingredient as i", "i.step_id", "s.step_id")
    .leftJoin("ingredients as ing", "ing.ingredient_id", "i.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "s.num_steps as step_number",
      "s.step_id",
      "s.instructions",
      "ing.ingredient_id",
      "ing.ingredient_name",
      "i.quantity"
    )
    .where("r.recipe_id", recipe_id)
    .orderBy("step_number", "ingredient_id", "asc");

  const final = {
    recipe_id: result[0].recipe_id,
    recipe_name: result[0].recipe_name,
    steps: [],
  };
  if (result[0].step_id == null) {
    return final;
  }

  for (let step of result) {
    final.steps.push({
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
    });
    // for (let step of result) {
    //   stepOrganized.ingredients.push({
    //     ingredient_id: step.ingredient_id,
    //     ingredient_name: step.ingredient_name,
    //     quantity: step.quantity,
    //   });
    // }
    // final.steps.push(stepOrganized);
  }

  return final;
}
// select r.recipe_id, r.recipe_name, s.num_steps as step_number , s.step_id, s.instructions, ing.ingredient_id, ing.ingredient_name, i.quantity from recipes as r left join steps as s on s.recipe_id = r.recipe_id
// left join step_ingredient as i on i.step_id = s.step_id
// left join ingredients as ing on ing.ingredient_id = i.ingredient_id
// ;

module.exports = {
  get,
  getById,
};
