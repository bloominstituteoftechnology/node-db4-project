const db = require('../data/connection')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstruction,
    getRecipeByIngredient
}

function getRecipes() {
        return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('Ingredients')
    .join('RecipeServices', 'RecipeServices.Ingredients_Id', 'Ingredients.id' )
    .join('Recipes', 'RecipeServices.Recipe_Id','Recipes.id')
    .select('Ingredients.*','RecipeServices.Quantity','Recipes.RecipeName')
    .where('recipe_id', '=', recipe_id)
}

function getInstruction(recipe_id) {
    return db('Instructions')
    .select('Instructions.*', 'Recipes.RecipeName')
    .join('Recipes', 'Instructions.Recipe_Id', 'Recipes.Id')
    .where('recipe_id', '=', recipe_id)
}

function getRecipeByIngredient(id) {
    return db('ingredients')
    .join('RecipeServices', 'RecipeServices.Ingredients_Id','Ingredients.Id')
    .join('Recipes', 'RecipeServices.Recipe_Id','Recipes.Id')
    .select('Recipes.*', 'Ingredients.name as Ingredient_Name', 'ingredients.id as Ingredient_Id')
    .where('Ingredients.id', '=', id)
}