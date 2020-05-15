const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredients")
        .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
        .select("ingredients.name", "recipe_ingredients.quantity")
        .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
    return db('steps')
        .join('recipes', 'steps.recipe_id', 'recipes.id')
        .select('recipes.name', 'steps.step_number', 'steps.instructions')
        .where({ recipe_id: recipe_id })
}

