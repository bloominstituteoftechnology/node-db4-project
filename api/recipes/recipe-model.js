const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  const rows = await db('recipes as r')
    .join('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.step_id', 'i.step_id')
    .where('r.recipe_id', recipe_id);

  return {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: rows.map((row) => ({
      step_id: row.step_id,
      step_number: row.step_number,
      step_instructions: row.step_instructions,
      ingredients: rows
        .filter(
          (ingredient) =>
            ingredient.ingredient_id !== null &&
            ingredient.step_id === row.step_id
        )
        .map((ingredient) => ({
          ingredient_id: ingredient.ingredient_id,
          ingredient_name: ingredient.ingredient_name,
          quantity: ingredient.quantity,
        })),
    })),
  };
}

module.exports = {
  getRecipeById,
};
