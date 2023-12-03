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
            .select('ingredients.ingredient_id', 'quantity');
        
        step.ingredients = ingredientRows.map(row => ({
            ingredient_id: row.ingredient_id,
            quantity: row.quantity
        }));

        // Remove unwanted properties from step object
        delete step.recipe_id;
        delete step.step_id;
    }

    return {
        recipe_name: recipe.recipe_name,
        steps: steps.map(({ step_number, step_instructions, ingredients }) => ({
            step_number,
            step_instructions,
            ingredients
        }))
    };
}

module.exports = {
    getRecipeById
};
