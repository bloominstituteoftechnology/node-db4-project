const db = require('./dbConfig');

function getRecipes() {
    return db('recipes')
}

function getShopingList(recipe_id) {
    return db('ingredients as i', 'i.ingredient', 'i.id')
        .join('recipe_ingredients as ri', 'ri.recipe_id', 'ri.quantity')
        .select('i.ingredient', 'ri.quantity')
        .where('ri.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps as st')
        .join('recipes as r', 'r.id', 'st.recipe_id')
        .select('st.id', 'r.recipe', 'st.step_number', 'st.instruction')
        .where('st.recipe_id', recipe_id)
}




module.exports = {
    getRecipes,
    getShopingList,
    getInstructions

}