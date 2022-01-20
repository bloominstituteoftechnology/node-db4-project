const db = require('../../data/db-config');
async function getRecipes() {
    const recipes = await db('recipes as r')
    return recipes
}

async function getRecipeById(recipe_id) {
    const recipes = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')

        .select( 'r.*', 's.step_id','s.step_number',   's.step_instruction',          
                    'i.ingredient_id', 'i.ingredient_name','si.quantity')

        .orderBy('s.step_number')
        .where('r.recipe_id', recipe_id)
        
const result = {
    recipe_id: recipes[0].recipe_id,
    recipe_name: recipes[0].recipe_name,
        steps: []
}

recipes.forEach(recipe => {
    if(recipe.step_id) {
         result.steps.push({
         step_id: recipe.step_id,
         step_number: recipe.step_number,
            step_instructions: recipe.step_instruction,
                ingredients: []
})
if(recipe.ingredient_id) {
     result.steps[0].ingredients.push({
        ingredient_id: recipe.ingredient_id,
        ingredient_name: recipe.ingredient_name,
            quantity: recipe.quantity
})}
}
});
    return result
}
module.exports = {
    getRecipes,
    getRecipeById,
}; 