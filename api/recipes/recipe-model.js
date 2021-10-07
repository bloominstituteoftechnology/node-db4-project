const db = require('./../../data/db-config');

async function getRecipeById(recipe_id){
    const flatRecipe = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('steps_ingredients as st', 'st.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'st.ingredient_id')
        .select('r.recipe_name', 'st.ingredient_amt','i.ingredient_name', 's.step_num', 's.step_text')
        .where('r.recipe_id', 1);
    
    return flatRecipe;
}

module.exports = {
    getRecipeById
};
