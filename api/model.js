const db = require("../data/db-config");

async function getIngredients(step_id) {
    return await db("ingredients as i")
    .join("steps_ingredients as si", "i.ingredient_id", "si.ingredient_id")
    .select("i.ingredient_id", "i.ingredient_name", "si.quantity")
    .where("si.step_id", step_id);
}

async function getRecipeById(recipe_id) {
  const rows = await db("recipes as r")
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .select(
      "r.recipe_id",
      "r.recipe_name",
      "s.step_id",
      "s.step_number",
      "s.step_instructions"
    )
    .where("r.recipe_id", recipe_id)
    .orderBy("s.step_number");

  const recipe = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    steps: [],
  };

  rows.forEach((row) => {
    recipe.steps.push({
      step_id: row.step_id,
      step_number: row.step_number,
      step_instructions: row.step_instructions,
      ingredients: []
    });
  });
  
  recipe.steps.forEach(step => {
    step.ingredients.push(getIngredients(step.step_id));
  });


  return recipe;
}

module.exports = { getRecipeById };

// SQL for pulling base data:
// -----------------------------------------
// select
//     r.recipe_id, r.recipe_name, s.step_id, s.step_number, s.step_instructions
// from recipes as r
// left join steps as s
//     on r.recipe_id = s.recipe_id
// where r.recipe_id = 1;

// SQL for pulling ingredients using step.id:
// -----------------------------------------
// select
//     i.ingredient_id, i.ingredient_name, si.quantity
// from ingredients as i
// join steps_ingredients as si
//     on i.ingredient_id = si.ingredient_id
// where si.step_id = 1;

// db("ingredients as i")
//     .join("steps_ingredients as si", "i.ingredient_id", "si.ingredient_id")
//     .select("i.ingredient_id", "i.ingredient_name", "si.quantity")
//     .where("si.step_id", step.id)
