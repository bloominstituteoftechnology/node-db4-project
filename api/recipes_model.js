const db = require('../data/db-config')

async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
        .select(
            'r.*',
            's.step_number',
            's.step_instructions',
            'i.ingredient_name',
            'q.quantity_amount'
        )
        .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
        .leftJoin('ingredients as i', 's.step_id', 'i.step_id')
        .leftJoin('quantities as q', 'i.ingredient_id', 'q.ingredient_id')

    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps: []
    }

    rows.forEach(row => {
        if (row.step_number) {
            result.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredient_name: row.ingredient_name,
                quantity_amount: row.quantity_amount
            })
            // result.steps.ingredient_name.push({
            //     ingredient_id: row.ingredient_id,
            //     ingredient_name: row.ingredient_name,
            //     quantity_amount: row.quantity_amount
            // })
        } else {
            result.steps = []
        }

        // const stepResult = {
        //     step_id: rows[0].recipe_id.step_id,
        //     step_name: rows[0].recipe_id.step_id,
        //     ingredient_name: []
        // }

        // rows.forEach(row => {
        //     if (row.ingredient_name) {
        //         stepResult.ingredient_name.push({
        //             ingredient_id: row.ingredient_id,
        //             ingredient_name: row.ingredient_name,
        //             quantity_amount: row.quantity_amount
        //         })
        //     } else {
        //         result.ingredient_name = []
        //     }
        //     })
    })

    return result;
}

module.exports = {
    getRecipeById
}
