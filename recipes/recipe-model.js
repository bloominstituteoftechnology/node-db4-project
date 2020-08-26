const db = require("../data/db-config.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("recipe as r")
        .join("ingredients as i", r.ingredientId, i.id)
        .select("r.id", "r.name", i.ingredents)
        .where({ ingredientId: id });
}

function getInstructions(recipe_id) {
    return db("instructions").where({ recipe_id }).first();
}
