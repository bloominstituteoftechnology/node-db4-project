const db = require('..//../data/db-confin')


async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
      .leftJoin('steps as s', 'r.recipe_id','s.recipe_id')
      .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
      .select(
          'r.recipe_id',
          'r.recipe_name',
          's.step_id',
          's.step_number',
          's.step_intructions',
          'si.ingredient_id',
      )
      .where('r.recipe_id', recipe_id)
      return recipeRows
}

module.exports = { getRecipeById }