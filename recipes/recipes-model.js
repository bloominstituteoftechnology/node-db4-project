const db = require('../data/db-conifg');

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('recipes_and_ingredients as rai')
    .join('recipes as re', 'rai.recipes_id', 'rai.quantity', "re.id")
    .join('ingredients as in', 'rai.ingredients_id', 'in.id')
    .select('re.recipe_name', 'in.ingredient_name', 'rai.quantity')
    .where('recipe_id', '=', id)
};

function getInstructions(id) {
    return db('steps as st')
    .join('recipes as re', 'st.recipes_id', 're.id')
    .join('instructions as in', 'st.instructions_id', 'in.id')
    .select('re.recipeame', 'st.step', 'st')
    .where('recipe_id', '=', id);
}