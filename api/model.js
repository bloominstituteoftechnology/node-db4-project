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
      ingredients: ingredients.filter(ingredient => (ingredient.step_id = step.id))
    })),


  }
  return result



};

module.exports = {
  getRecipes,
};


// {
//   "recipe_id" : 1,
//   "recipe_name": "Spaghetti Bolognese",
//   "created_at": "2021-01-01 08:23:19.120",
//   "steps": [
//     {
//       "step_id": 11,
//       "step_number": 1,
//       "step_instructions": "Put a large saucepan on a medium heat",
//       "ingredients": [

//       ]
//     },
//     {
//       "step_id": 12,
//       "step_number": 2,
//       "step_instructions": "Add 1 tbsp olive oil",
//       "ingredients": [
//         { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//       ]
//     },
//   ]
// }
