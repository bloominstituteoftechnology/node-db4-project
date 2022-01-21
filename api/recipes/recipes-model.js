const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeRows = await db('Recipes as R')
        .leftJoin('Steps as S', 'R.recipe_id', 'S.recipe_id')
        .leftJoin('Step_Ingredients as SI', 'SI.step_id', 'S.step_id')
        .leftJoin('Ingredients as I', 'I.ingredient_id', 'SI.ingredient_id')
        .select(
            'R.*',
            'S.step_id',
            'S.step_number',
            'S.step_instructions',
            'I.ingredient_id',
            'I.ingredient_name',
            'SI.quantity'
        )
        .where('R.recipe_id', recipe_id)

    const recipes = {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        created_at: recipeRows[0].created_at,
        steps: recipeRows.reduce((acc, row) => {
            if (!row.ingredient_id) {
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions,
                })
            }
            if (row.ingredient_id && !acc.find(step => step.step_id === row.step_id)) {
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions,
                    ingredients: [
                        {
                            ingredient_id: row.ingredient_id,
                            ingredient_name: row.ingredient_name,
                            quantity: row.quantity,
                        }
                    ]
                })
            }
            const currentStep = acc.find(step => step.step_id === row.step_id)
            currentStep.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity,
            })
            return acc
        }, [])
    }

    return recipes
}

module.exports = {
    getRecipeById
}