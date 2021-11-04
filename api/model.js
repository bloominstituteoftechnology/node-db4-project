const db = require('../data/db-config.js');

async function getRecipesById(recipes_id){
    const rows = await db('recipe as r')
    .leftJoin('steps as st','r.recipe_id', 'st.recipe_id')
    .where('r.recipe_id', recipes_id)
    .select('st.*', 'r.recipe_name', 'r.recipe_id','r.post_time')
    .orderBy('st.step_number')

    const rest = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].post_time,
        steps: []
    }
    rows.forEach(row => {
        if(row.step_id){
            rest.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredients: []
            })
        }
    })
    rest.steps.forEach(row => {
        if(row.ingredient_id){
            rest.steps.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity
            })
        }
    })
    return rest
}

module.exports = {getRecipesById}