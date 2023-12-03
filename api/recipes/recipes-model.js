const knex = require('knex')(require('../../knexfile').development);

async function getRecipeById(recipe_id) {
    const recipe = await knex('recipes').where({ recipe_id }).first();
    if (!recipe) {
        return null; // Recipe not found
    }

    const steps = await knex('steps').where({ recipe_id }).orderBy('step_number', 'asc');
    
    for (let step of steps) {
        const ingredientRows = await knex('step_ingredients')
            .join('ingredients', 'step_ingredients.ingredient_id', 'ingredients.ingredient_id')
            .where({ step_id: step.step_id })
            .select('ingredients.ingredient_id', 'ingredient_name', 'quantity');
        
        step.ingredients = ingredientRows.map(row => ({
            ingredient_id: row.ingredient_id,
            ingredient_name: row.ingredient_name,
            quantity: row.quantity
        }));
    }

    return {
        recipe_id: recipe.recipe_id,
        recipe_name: recipe.recipe_name,
        created_at: recipe.created_at,
        steps
    };
}

module.exports = {
    getRecipeById
};
