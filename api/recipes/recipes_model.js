const db = require('../../data/db-config');

async function getRecipeById (recipe_id){
    const rows = await db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .select('r.*', 's.*', 'i.*', 'si.quantity')
        .where('r.recipe_id', recipe_id)
        .orderBy('step_number');
    if (!rows[0]){
        return null
    }
    const maxStep = rows[rows.length - 1].step_number;
    const steps = [];
    for (let i = 1; i < maxStep + 1; i++){
        let stepRaw = rows.filter(item => item.step_number === i);
        let step = {
            step_id: stepRaw[0].step_id,
            step_number: i,
            step_instructions: stepRaw[0].step_instructions,
            ingredients: stepRaw[0].quantity ?
                stepRaw.map(item => {return {
                    ingredient_id: item.ingredient_id, 
                    ingredient_name: item.ingredient_name, 
                    quantity: item.quantity
                }}) : []
        };
        steps.push(step);
    }
    const recipe = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        steps: steps
    }

    return recipe;
}

module.exports = { getRecipeById }
