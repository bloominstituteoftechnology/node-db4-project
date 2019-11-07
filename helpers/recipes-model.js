const db = require('../data/dbconfig.js')

module.exports = {
    getRecipes,
    getShoppingList,
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return('recipe_ingredients as ri')
        .select('ingredients.name', 'ri.qunatity')
        .where({ recipe_id })
        .join('ingredients', 'ingredients.id', 'ri.ingredient_id')

}

