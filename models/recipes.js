const db = require('../data/dbconfig')

const getRecipes = () => db('recipes')

const getShoppingList = id => {
    return db('recipe_ingredients')
    .select('ingredients.ingredient_name', 'recipe_ingredients.quantity')
    .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .where('recipes.id', id)
}

const getInstructions = id => {
    return db('steps')
    .select('steps.step_number', 'steps.step_name', 'steps.step_instructions')
    .join('recipes', 'steps.recipe_id', 'recipes.id')
    .where('recipes.id', id)
}

const getIngredientInRecipe = id => {
    return db('recipe_ingredients')
    .select('recipes.recipe_name')
    .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .where('ingredients.id', id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredientInRecipe
}