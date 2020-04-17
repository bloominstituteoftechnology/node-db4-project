const db = require("../data/db-config.js");

module.exports = {
    getRecipe,
    getShoppingList,
    getInstructions,
}

function getRecipe() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("ingredients")
    .join("recipes", "recipes.id", "ingredients.recipe_id")
    .select("ingredients.ingredients", "ingredients.quantity")
    .where({ recipe_id })

}

function getInstructions(recipe_id) {
    return db("instructions")
    .join("recipes", "recipes.id", "instructions.recipe_id")
    .select("recipes.title", "instructions.step_number", "instructions.instructions")
    .where({ recipe_id })
}



