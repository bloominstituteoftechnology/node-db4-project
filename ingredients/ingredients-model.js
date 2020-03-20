module.exports = {
    getIngredients,
    getIngredientsById,
    getRecipesWithIngredient,
    getRecipeRequirementsWithIngredient
}

const db = require('../data/db-config.js');

function getIngredients() {
    return db('ingredients');
}

function getIngredientsById(ingredient_id) {
    return db('ingredients')
        .where({'ingredients.id' : ingredient_id})
}

function getRecipeRequirementsWithIngredient(ingredient_id) {
    return db('recipe_requirements as rr')
        .where({'rr.ingredient_id': ingredient_id});
}

function getRecipesWithIngredient(ingredient_id) {
    return db('recipe_requirements as rr')
        .join('recipes', 'rr.recipe_id', 'recipes.id')
        .where({'rr.ingredient_id': ingredient_id})
        .select('recipes.name')
}
