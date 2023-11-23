const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            's.step_id',
            's.step_number',
            's.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.quantity'
        )
        .orderBy('s.step_number')
        .where('r.recipe_id', recipe_id)

    const recipes = {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        steps: recipeRows.reduce((acc, rows) => {
            if (!rows.ingredient_id) {
                return acc.concat({
                    step_id: rows.step_id,
                    step_number: rows.step_number,
                    step_instructions: rows.step_instructions,
                })
            }
            if (rows.ingredient_id && !acc.find(step => step.step_id === rows.step_id)) {
                return acc.concat({
                    step_id: rows.step_id,
                    step_number: rows.step_number,
                    step_instructions: rows.step_instructions,
                    ingredients: [
                        {
                            ingredient_id: rows.ingredient_id,
                            ingredient_name: rows.ingredient_name,
                            quantity: rows.quantity
                        }
                    ]
                })
            }
            
            const currentStep = acc.find(step => step.step_id === rows.step_id)
            currentStep.ingredients.push({
                ingredient_id: rows.ingredient_id,
                ingredient_name: rows.ingredient_name,
                quantity: rows.quantity
            })
            return acc;
        }, [])
    }

    return recipes
}

module.exports = { getRecipeById };