const db = require('../data/db-config')

async function getRecipeById(recipe_id) {
    const recipe = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('ingredient_quantities as iq', 'iq.step_id','s.step_id')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'iq.ingredient_id')
    .select(
        'r.recipe_id',
        'r.recipe_name',
        'r.created_at',
        's.step_id',
        's.step_number',
        's.step_instructions',
        'i.ingredient_id',
        'i.ingredient_name',
        'iq.quantity'
        )
    .orderBy('s.step_number')
    .where('r.recipe_id', recipe_id)
    

    const recipeObj = {
        recipe_id: recipe[0].recipe_id,
        recipe_name: recipe[0].recipe_name,
        created_at: recipe[0].created_at,
        steps: recipe.reduce((acc, row) => {
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
                            quantity: row.quantity
                        }
                    ]
                })
            }

            const currentStep = acc.find(step => step.step_id === row.step_id)
            currentStep.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity
            })
            return acc
        }, [])
    }
    // console.log(recipeObj)
    return recipeObj;
    
}

module.exports = {
    getRecipeById,
}