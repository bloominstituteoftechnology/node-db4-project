//Imports; DATABASE Connection
const db = require('../data/db-config')


//Helper-Function
async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .where('r.recipe_id', recipe_id)
        .select('r.*', 'r.recipe_name', 'r.recipe_id')
        .orderBy('st.step_number')

    const stepsResult = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps: []
    }
    rows.forEach(row => {
        if (row.step_id) {
        stepsResult.steps.push({
            step_id: row.step_id,
            step_number: row.step_number,
            instructions: row.instructions,
            ingredients: row.ingredients
        })
        }
    })
}

            // const ingredientRows = await db('recipes as r')
            //         .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
            //         .where('r.recipe_id', recipe_id)
            //         .select('r.*', 'r.recipe_name', 'r.recipe_id')
            //         .orderBy('st.step_number')
            // const ingredientsResult = {
            //     step_id: ingredientRows[0].step_id,
            //     step_number: ingredientRows[0].step_number,
            //     step_instructions: ingredientRows[0].step_instructions,
            //     ingredients: []
            // }
            // ingredientRows.forEach(row => {
            //     if(row.ingredient_id) {
            //         ingredientsResult.ingredients.push({
            //             ingredient_id: row.ingredient_id,
            //             ingredient_name: row.ingredient_name,
            //         })
                    
            //     }
            // })
            

//Exports; Exposing
module.exports = {
    getRecipeById,
}

