const db = require('./../../data/db-config');

function getRecipes(){
    return db('recipes as r')
        .select('r.recipe_id', 'r.recipe_name')
        .orderBy('r.recipe_id', 'asc')
}

async function getRecipeById(recipe_id){
    const flatRecipe = 
    await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('steps_ingredients as st', 'st.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'st.ingredient_id')
        .select('r.recipe_id', 'r.recipe_name', 'st.ingredient_amt','i.ingredient_name', 'i.ingredient_id', 's.step_num', 's.step_text', 's.step_id')
        .where('r.recipe_id', recipe_id)
        .orderBy('s.step_num', 'asc')
// helper functions for organizing the ingredients
    const filteredIngredients = flatRecipe.filter(recipe => {
        return recipe.ingredient_id !== null
    });
    const formattedIngredients = filteredIngredients.map(ingredients => {
        return {
            step_id: ingredients.step_id,
            ingredient_id: ingredients.ingredient_id,
            quantity: ingredients.ingredient_amt,
            ingredient_name: ingredients.ingredient_name
        } 
    })
//helper functions for organizing the steps
    const allRecipeSteps = !flatRecipe[0] || !flatRecipe[0].step_id 
    ? [] 
    : flatRecipe.map(recipe => {
        return {
            step_id: recipe.step_id,
            step_number: recipe.step_num,
            step_instructions:recipe.step_text,
            ingredients: formattedIngredients.filter(ingredient => ingredient.step_id === recipe.step_id)
        }
    })
    const filteredStepsSet = new Set();
    const filteredSteps = allRecipeSteps.filter(step => {
        const duplicate = filteredStepsSet.has(step.step_id);
        filteredStepsSet.add(step.step_id);
        return !duplicate;
    });
//final recipe format
    const formattedRecipe = flatRecipe[0] === undefined
    ? null
    : {
        recipe_id: flatRecipe[0].recipe_id,
        recipe_name: flatRecipe[0].recipe_name,
        steps: filteredSteps
    };
    return formattedRecipe;
}

async function createRecipe(newRecipe){
    const newRecipeId = await db('recipes').insert(newRecipe)

    return getRecipeById(newRecipeId);
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe
};
