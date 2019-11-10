const db = require('../data/db-conifg');

module.exports = {
    getRecipes,
    getRecipeId,
    getInstructions,
    getShoppingList
}

function getRecipes() {
    return db('recipes');
};

function getRecipeId(id) {
    return db('recipes').where({ id: Number(id) })
};

function getShoppingList(id) {
    return db('recipes_and_ingredients as rai')
    .join('recipes as re', "re.id", 'rai.recipes_id')
    .join('ingredients as in', 'rai.ingredients_id', 'in.id')
    .select('re.recipe_name', 'in.ingredient_name', 'rai.quantity')
    .where('recipes_id', id)
};

function getInstructions(id) {
    return db('steps as st')
    .join('recipes as re', 'st.recipes_id', 're.id')
    .join('recipes_instructions as in', 'st.instructions_id', 'in.id')
    .select('st.step', 'in.instructions')
    .where('recipes_id', id);
}