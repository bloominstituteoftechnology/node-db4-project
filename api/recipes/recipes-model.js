const db = require('../data/db-config.js')

function getRecipes() {
    return db('recipes')
}

function getRecipesById(recipe_id){
    return db('recipes').where('recipe_id', recipe_id).first()
}

module.exports = {
    getRecipes,
    getRecipesById
}