const db = require('../../data/db-config')

async function getRecipeById(recipe_id){
    const recipeWithSteps = await db('recipes as r')
    .select('r.*', 'rs.step_id', 'rs.step_number', 'rs.step_instructions')
    .leftJoin('recipe_steps as rs', 'rs.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', recipe_id)
    .orderBy('rs.step_number', 'asc')

    const ingredients = await db('ingredients as i')
    .select('i.*', 'si.step_id', 'si.ingredient_quantity')
    .join('steps_ingredients as si', 'si.ingredient_id', 'i.ingredient_id')
    .join('recipe_steps as rs', 'si.step_id', 'rs.step_id')
    .where('recipe_id', recipe_id)
    .where('recipe_id', recipe_id)

    let stepsArray = recipeWithSteps.map((rec) => {
        return{
            step_id: rec.step_id,
            step_number: rec.step_number,
            step_instructions: rec.step_instructions,
            ingredients: ingredients
            .filter((ing) => ing.step_id === rec.step_id)
            .map((ing) => {
                return{
                    ingredient_id: ing.ingredient_id,
                    ingredient_name: ing.ingredient_name,
                    quantity: ing.ingredient_quantity,
                    unit: ing.measurement_unit
                }
            })
        }
    })
    let recipeToReturn = {
        recipe_id: recipeWithSteps[0].recipe_id,
        recipe_name: recipeWithSteps[0].recipe_name,
        created_at: recipeWithSteps[0].created_at,
        step: stepsArray
    }
    return recipeToReturn
}

module.exports = {getRecipeById}