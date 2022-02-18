const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
    const result = await db('recipes as r')
    .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', recipe_id)
    .orderBy('s.step_number')
 
    if (result.length === 0) {
        return null;
    }

    const recipe = {
        recipe_id: result[0].recipe_id,
        recipe_name: result[0].recipe_name,
        steps: []
    };

    for(let [idx, step] of result.entries()) {
        const ingredients = await db('ing_step as si')
        .leftJoin('ingredients as i', 'si.ing_id', 'i.ing_id')
        .where('si.step_id', step.step_id)
        .orderBy('si.step_id');
        
        recipe.steps.push({
            step_id: step.step_id,
            step_number: step.step_number,
            instructions: step.instructions,
            ingredients: []
        });

        if (ingredients == []) {
            // empty ingredients
        } else {
            ingredients.forEach( item => {
                recipe.steps[idx].ingredients.push({
                    ing_id: item.ing_id,
                    ing_name: item.ing_name,
                    quantity: item.quantity
                })
            });
        }
    }
    return recipe;
}

module.exports = {
    getRecipeById
}