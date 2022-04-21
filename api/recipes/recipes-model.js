const db = require('../../data/db-config');

/**
 * {
  "recipe_id" : 1,
  "recipe_name": "Spaghetti Bolognese",
  "created_at": "2021-01-01 08:23:19.120",
  "steps": [
    {
      "step_id": 11,
      "step_number": 1,
      "step_instructions": "Put a large saucepan on a medium heat",
      "ingredients": []
    },
    {
      "step_id": 12,
      "step_number": 2,
      "step_instructions": "Add 1 tbsp olive oil",
      "ingredients": [
        { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
      ]
    },
  ]
}


 */
async function getRecipeById(recipe_id) {
    const recipeQuery = await db('recipes as re')
        .where('re.recipe_id', recipe_id)
        .leftJoin('steps as st', 're.recipe_id', 'st.recipe_id')
        .leftJoin('quantities as q', 'st.step_id', 'q.step_id')
        .leftJoin('ingredients as in', 'q.ingredient_id', 'in.ingredient_id')
        // .select('re.*', 'st.*', 'q.*', 'in.*')
        // .where('recipe_id', recipe_id)
        .select('re.*', 'st.step_id', 'st.*', 'q.*', 'in.*')
        .orderBy('st.step_number', 'asc');

    const dummyRecipe = {
        recipe_id: recipeQuery[0].recipe_id,
        recipe_name: recipeQuery[0].recipe_name,
        steps: [],
    };
/**
 *  "ingredient_id": 1,
        "ingredient_name": "bone broth",
        "instructions": "Boil broth",
        "quantity": 6,
        "quantity_id": 1,
        "recipe_id": 1,
        "recipe_name": "Yummy Soup",
        "step_id": 1,
        "step_number": 1,
        "unit_measurement": "cups"
 * 
 */
    recipeQuery.forEach(ing => {
        if (dummyRecipe.steps.length === 0) {
            dummyRecipe.steps.push({
                step_id: ing.step_id,
                step_number: ing.step_number,
                instructions: ing.instructions,
                ingredients: [],
            })
        } else if (dummyRecipe.steps.filter(step => step.step_id === ing.step_id).length === 0) {
            dummyRecipe.steps.push({
                step_id: ing.step_id,
                step_number: ing.step_number,
                instructions: ing.instructions,
                ingredients: [],
            })
        }
    })
    return dummyRecipe;


}

module.exports = { getRecipeById }