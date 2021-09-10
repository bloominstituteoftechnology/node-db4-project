const db = require('../data/db-config.js')

function getAll() {
    return db('recipes')
}

async function getById(recipe_id) {
    const data = await db('recipes as rc')
    .leftJoin('steps as st', 'rc.recipe_id', 'st.recipe_id')
    .leftJoin('step_ingredients as si', 'st.step_id', 'si.step_id')
    .leftJoin('ingredients as ing', 'si.ingredient_id', 'ing.ingredient_id')
    .select('rc.*', 'st.step_id','st.step_number','ing.ingredient_id', 'ing.ingredient_name','si.quantity', 'st.step_instructions')
    .where('rc.recipe_id', recipe_id) 
    .orderBy('st.step_number', 'asc')
    
    const format = {
        recipe_id: data[0].recipe_id,
        recipe_name: data[0].recipe_name,
        created_at: data[0].created_at,
        steps: ({
            step_id: data[0].step_id,
            step_number: data[0].step_number,
            step_instructions: data[0].step_instructions,
            ingredients: []
        })
    }

    data.forEach(value => {
        if(value.ingredient_id){
            format.steps.ingredients.push({
                ingredient_id: value.ingredient_id,
                ingredient_name: value.ingredient_name,
                quantity: value.quantity
            })
        }
    })
    return format
}

module.exports = { getAll , getById}