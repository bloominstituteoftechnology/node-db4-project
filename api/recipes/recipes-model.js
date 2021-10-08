const db = require("../../data/db-config");

async function getRecipeById(recipe_id) {
  const recipe = await db("recipes as r")
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .join("ingredients as i", "i.ingredient_id", "si.ingredient_id")
    .join("step_ingredients as si", "si.step_id", "s.step_id")
    .where("r.recipe_id", recipe_id)
    .select("r.recipe_id", "r.recipe_name", "s.*", "i.*", "si.*")
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
        ingredients: [
          {
            ingredient_name: row.ingredient_name,
            ingredient_unit: row.ingredient_unit,
            amount: row.amount,
          },
        ],
      });
    }
  });

  // recipe.reduce((acc, curr) => {
  //   const {
  //     recipe_id,
  //     recipe_name,
  //     step_id,
  //     step_number,
  //     instructions,
  //     ingredient_id,
  //     ingredient_name,
  //     ingredient_unit,
  //   } = curr;
  //   if (acc.recipe_id) {
  //   } else {
  //     acc = {
  //       recipe_id,
  //       recipe_name,
  //       steps: [
  //         {
  //           step_id,
  //           step_number,
  //           instructions,
  //           ingredients: [
  //             {
  //               ingredient_id,
  //               ingredient_name,
  //               ingredient_unit,
  //             },
  //           ],
  //         },
  //       ],
  //     };
  //   }
  // }, {});

  return result;
}

module.exports = { getRecipeById };
