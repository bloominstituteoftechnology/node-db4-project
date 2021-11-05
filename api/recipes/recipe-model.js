const db = require('../../data/db-config')

async function getRecipeById(recipeId) {
    const recipeAndSteps = await db('recipes as re')
    .leftJoin('recipe_steps as rs','re.recipe_id','rs.recipe_id')
    .select('re.recipe_name',
        'rs.recipe_step_id',
        'rs.step_number',
        'rs.step_instructions')
    .where('rs.recipe_id', recipeId)
    // recipeAndSteps returns array of each step
    // includes recipe_name, recipe_step_id,  step_number, and step_instructions

    const stepsWithIngredients = await db('step_ingredient_quantities as siq')
    .leftJoin('ingredients as in','siq.ingredient_id', 'in.ingredient_id')
    .select('siq.quantity',
        'in.ingredient_id',
        'in.ingredient_name',
        'siq.recipe_step_id')
    //stepsWithIngredients returns array of steps with ingredients
    //includes ingredient_id, ingredient_name, quantity, and recipe_step_id

    const stepsArrayWithIngredients = recipeAndSteps.map(step => {
        let ingredientFilter = stepsWithIngredients.filter(ingredient => {
            return ingredient.recipe_step_id === step.recipe_step_id
        })    

        if (ingredientFilter.length === 1) {
            return {
                step_id: step.recipe_step_id,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                ingredients: [
                    {
                        ingredient_id: ingredientFilter[0].ingredient_id,
                        ingredient_name: ingredientFilter[0].ingredient_name,
                        quantity: ingredientFilter[0].quantity
                    }
                ]
            }
        } else {
            return {
                step_id: step.recipe_step_id,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                ingredients: []
            }
        }
    })
    return stepsArrayWithIngredients
}

module.exports = {
    getRecipeById
}