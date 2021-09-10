const db = require('../../data/db-config')

const getAll = async () => {
  return await db('recipes')
}

const getById = async recipe_id => {
  const ingredients = await db('recipe_ingredients as ri')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'ri.ingredient_id')
    .leftJoin('recipes as r', 'r.recipe_id', 'ri.recipe_id')
    .select('r.*', 'i.*', 'ri.quantity', 'ri.ingredient_id')
    .where('ri.recipe_id', recipe_id)

  const steps = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .select('step_number', 'instructions', 's.recipe_id')
    .where('s.recipe_id', recipe_id)
    .orderBy('step_number', 'asc')

  const recipe = {
    recipe_id: ingredients[0].recipe_id,
    recipe_name: ingredients[0].recipe_name,
    created_at: ingredients[0].created_at,
    ingredients: [],
    steps: []
  }

  if (ingredients[0]
    !== undefined
    || ingredients[0]
    !== null) {
    ingredients.forEach(ingredient => {
      recipe.ingredients.push({
        ingredient_id: ingredient.ingredient_id,
        ingredient_name: ingredient.ingredient_name,
        quantity: ingredient.quantity
      })
    })
  }

  if (steps[0]
    !== undefined
    || steps[0]
    !== null) {
    steps.forEach(step => {
      recipe.steps.push({
        step_id: step.step_id,
        step_number: step.step_number,
        instructions: step.instructions
      })
    })
  }

  return recipe
}

module.exports = {
  getAll,
  getById
}
