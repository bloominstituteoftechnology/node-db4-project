const db = require('../data/db-config');

const getRecipes = () => {
    return db('recipes').select('*')
};

function getShoppingList (id) {
    return db
    .select(
        "ingredients.ingredient_name",
        "recipe_ingredients.quantity",
        "recipe_ingredients.unit_of_measurement"
    )
    .from ('recipe_ingredients')
    .join (
        'ingredients',
        'ingredients.id', '=', 'recipe_ingredients.ingredients_id')
}