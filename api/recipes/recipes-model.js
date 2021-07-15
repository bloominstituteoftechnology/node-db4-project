const db = require('../../data/db-config');

async function getRecipes() {
    const recipes = await db('recipes as r')
    return recipes
}

async function getRecipeById(recipe_id) {
    const recipe = await db('recipes as r')
        // .select('r.recipe_id', 'r.recipe_name', 'r.created_at')
        // .where('r.recipe_id', recipe_id).first()
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .where('r.recipe_id', recipe_id)
        .select('r.*', 's.step_id', 's.step_number', 's.step_instruction')
        .orderBy('s.step_number')
    return recipe
    
    // const result = {
    //     recipe_id: recipe[0].recipe_id,
    //     recipe_name: recipe[0].recipe_name,
    //     created_at: recipe[0].created_at,
    //     steps: []
    // }

    // recipe.forEach() => {
        
    // });
}

module.exports = {
    getRecipes,
    getRecipeById,
};