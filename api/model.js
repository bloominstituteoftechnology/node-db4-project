const db = require("../data/db-config");

const getRecipes = async (id) => {
 

  const recipes = await db('recipes').where('id', id)
  const steps = await db('steps').where('recipe_id', id)
  const ingredients = await db('ingredients').where('recipe_id', id)
  const result = {
    recipe_id: id,
    recipe_name: recipes.recipe_name,
    created_at: recipes.created_at,
    steps: steps.map(step => ({
      step_id: step.id,
      step_number: step.step_number,
      step_instructions: step.step_instructions,
      ingredients: ingredients.filter(ingredient => (ingredient.step_id === step.id))
    })),


  }
  return result



};

module.exports = {
  getRecipes,
};

