const knex = require('knex')
const config = require('../knexfile')

const db = knex(config.development);

async function getRecipesById(recipe_id) {
    const rows = await db('recipes')
      .leftJoin('recipe_steps', 'recipe_steps.recipe_id', 'recipes.recipe_id')
      .leftJoin('ingredients_quantity as iq', 'iq.step_id', 'recipe_steps.step_id')
      .leftJoin('step_ingredients as sq', 'sq.ingredient_id', 'iq.ingredient_id')
      .where('recipes.recipe_id', recipe_id)
  
    const result = {
      recipe_id: rows[0].recipe_id,
      recipe_name: rows[0].recipe_name,
      created_at: rows[0].created_at,
      steps: rows.map((row) => ({
        step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions,
        ingredients: rows.map((row) => ({
          ingredient_id: row.ingredient_id,
          ingredient_name: row.ingredient_name,
          quantity: row.quantity,
        })),
      })),
    }
    return result
}

module.exports = {
    getRecipesById,
}