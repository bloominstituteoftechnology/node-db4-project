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
    return rows
}

module.exports = {
    getRecipeById
}
