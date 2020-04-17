const db = require("../data/db-config.js");

module.exports = {
    getRecipe,
    // addRecipe,
    // findRecipeById,
    // updateRecipe,
    // deleteRecipe
}

function getRecipe() {
    return db("recipes")
}