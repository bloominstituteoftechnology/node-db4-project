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
    return db("recipe_ingredients as r")
        .join("ingredients as i", "r.ingredient_id", "i.ingredient_id")
        .where("recipe_id", recipe_id)
        .select("ingredient_name as Ingredient", "quantity as Quantity")
}
function getInstructions(recipe_id) {

}