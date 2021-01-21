const db = require('../data/db-config.js');


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}
function getShoppingList(recipe_id) {

}
function getInstructions(recipe_id) {

}