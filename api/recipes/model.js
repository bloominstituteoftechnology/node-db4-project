const db = require('../../data/db-config')

async function getRecipes() {
    const recipes = await db('recipes as r')
    return recipes
}

async function getRecipeById(recipe_id) {
    const recipe = await db('recipes as re')
    .leftJoin('steps as st', 're.recipe_id', 'st.recipe_id')
    .leftJoin('step_ingredients as sti', 'st.step_id', 'sti.step_id')
    .leftJoin('ingredients as in', 'in.ingredient_id', 'sti.ingredient_id')
    .select(
        're.*', 
        'st.step_id', 
        'st.step_number', 
        'st.step_instruction', 
        'in.ingredient_id', 
        'in.ingredient_name', 
        'sti.quantity',
        )
    .orderBy('st.step_number')
    .where('re.recipe_id', recipe_id)

    const result = {
        recipe_id: recipe[0].recipe_id,
        recipe_name: recipe[0].recipe_name,
        created_at: recipe[0].created_at,
        steps: []
    }

    recipe.forEach(recipe => {
        if(recipe.step_id) {
            result.steps.push({
                step_id: recipe.step_id,
                step_number: recipe.step_number,
                step_instructions: recipe.step_instruction,
                ingredients: []
            })
            if(recipe.ingredient_id) {
                result.steps[0].ingredients.push({
                    ingredient_id: recipe.ingredient_id,
                    ingredient_name: recipe.ingredient_name,
                    quantity: recipe.quantity
                })
            }
        }
    });
    return result
}

module.exports = {
    getRecipes,
    getRecipeById
}