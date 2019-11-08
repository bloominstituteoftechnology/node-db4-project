const db = require('../db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipe_ingredients as ri')
        .select('ingredients.name')
        .where({ recipe_id })
        .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
}

function getInstructions(recipe_id){
    return db('instructions as i')
        .select('recipes.name', 'i.instruction')
        .where({ recipe_id })
        .join('recipes', 'recipes.id', 'i.recipe_id')
}