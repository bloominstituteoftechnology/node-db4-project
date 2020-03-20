module.exports = {
    getRecipes,
    getRecipe,
    getRecipeWithDetails,
    getShoppingList,
    getInstructions
}

const db = require('../data/db-config');

function getRecipes() {
    return db('recipes')
        .select('recipes.name', 'recipes.author');
}

function getRecipe(recipe_id) {
    return db('recipes')
        .where({'recipes.id': recipe_id});
}

async function getRecipeWithDetails(recipe_id) {

    const recipeInfo = await getRecipe(recipe_id);
    const shoppingList = await getShoppingList(recipe_id);
    const instructions = await getInstructions(recipe_id);
    return { 'recipe' : recipeInfo[0].name,
        'author': recipeInfo[0].author,
        'ingredients': shoppingList,
        'instructions': instructions};
}

function getShoppingList(recipe_id) {
    return db('recipe_requirements as rr')
        .join('ingredients', 'ingredients.id', 'rr.ingredient_id')
        .where({'rr.recipe_id': recipe_id})
        .select('ingredients.name', 'rr.quantity', 'rr.unit');
}

function getInstructions(recipe_id) {
    return db('steps')
        .where({'steps.recipe_id': recipe_id})
        .orderBy('steps.step_numberber')
        .select('steps.step_numberber as step', 'steps.instructions');
}
