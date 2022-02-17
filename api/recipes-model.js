const db = require('../data/db-config');

function find() {
  return db('recipes');
}

async function getRecipeById(id) {
  const rows = await db('recipes as r')
    .select(
      'r.*',
      'st.id as step_id',
      'st.step_number',
      'st.step_instructions',
      'si.ingredient_id',
      'ingredient_name',
      'quantity'
    )
    .leftJoin('steps as st', 'r.id', 'st.recipe_id')
    .leftJoin('step_ingredients as si', 'st.id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.id')
    .where('r.id', id)
    .orderBy('st.step_number');

  const recipe = {
    recipe_id: rows[0].id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  rows.forEach((row) => {
    if (row.step_id) {
      recipe.steps[row.step_number - 1] = {
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.step_instructions,
      };
    }
  });

  rows.forEach((row) => {
    if (row.ingredient_id) {
      if (!recipe.steps[row.step_number - 1].ingredients) {
        recipe.steps[row.step_number - 1].ingredients = [];
      }
      recipe.steps[row.step_number - 1].ingredients.push({
        ingredient_id: row.ingredient_id,
        ingredient_name: row.ingredient_name,
        quantity: row.quantity,
      });
    }
  });

  return recipe;
}

module.exports = {
  find,
  getRecipeById,
};
