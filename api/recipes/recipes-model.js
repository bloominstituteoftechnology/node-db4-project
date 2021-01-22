const db = require('../../data/db-config')

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipes')
        .join('recipe_steps', 'recipe_steps.recipe_id', 'recipes.recipe_id')
        .join('step_ingredients', 'step_ingredients.step_id', 'recipe_steps.step_id')
        .join('ingredients', 'ingredients.ingredient_id', 'step_ingredients.ingredient_id')
        .select('recipes.recipe', 'ingredients.ingredient','step_ingredients.quantity')
        // .where('recipes.recipe_id', recipe_id)
}

function getInstructions(recipe_id){
    return db('recipe_steps')
        .join('recipes', 'recipes.recipe_id', 'recipe_steps.recipe_id')
        .select('recipes.recipe', 'recipe_steps.step_number', 'recipe_steps.step_description')
        .where('recipes.recipe_id', recipe_id)
        .orderBy('recipe_steps.step_number')
}



