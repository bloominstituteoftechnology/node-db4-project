const db = require('../data/dbconfig.js')

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
        .select('ingredients.name', 'ri.qunatity')
        .where({ recipe_id })
        .join('ingredients', 'ingredients.id', 'ri.ingredient_id')

}

function getInstructions(recipe_id){
    return db('steps as s')
        .select('recipes.name', 's.instruction')
        .where({ recipe_id })
        .join('recipes', 'recipes.id', 'steps.recipe_id')
}

