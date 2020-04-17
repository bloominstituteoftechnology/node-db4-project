const db = require("../data/db-config.js");

module.exports = {
    getRecipe,
    getShoppingList,
    // addRecipe,
    // findRecipeById,
    // updateRecipe,
    // deleteRecipe
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

// SELECT recipes.title, ingredients.quantity, ingredients.ingredients FROM ingredients
// JOIN recipes
// WHERE recipes.id = ingredients.recipe_id