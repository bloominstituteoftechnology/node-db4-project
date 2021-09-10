const db = require('../../data/db-config');

async function getRecipeById(recipe_id){

// THIS IS MY QUERY

// select recipe_name, created_at, st.*, i.*
// from recipes as r
// left join steps as st
// 	on r.recipe_id = st.recipe_id
// left join step_ingredients as i
// 	on st.step_id = i.step_id
// where r.recipe_id = 1
// group by st.step_number



    const rows = await db('recipes as r')
    .select('recipe_name', 'created_at', "st.*", "ingredient_name", "step_ingredient_id as ingredient_id", 'quantity')
    .leftJoin('steps as st', 'r.recipe_id', '=', 'st.recipe_id')
    .leftJoin('step_ingredients as i', 'st.step_id', '=', 'i.step_id')
    .leftJoin('ingredients as ig', 'i.ingredient_id', '=', 'ig.ingredient_id')
    .where('r.recipe_id', recipe_id)
    .groupBy('st.step_number')
    .orderBy('st.step_number')

    const steps = rows[0].step_id ? rows.map(row => {
        console.log(rows)
        return{
            step_id: row.step_id,
            step_number: row.step_number,
            step_instructions: row.step_instructions,
            ingredients: row.ingredient_id ? {
                    ingredient_id: row.ingredient_id, 
                    ingredient_name: row.ingredient_name, 
                    quantity: row.ingredient_quantity
                }: []
        }
    }) : []

    const results = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        // steps: rows
        steps
    }

    return results
}

module.exports = {
    getRecipeById
}
