const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipesRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            's.step_id',
            's.step_number',
            's.step_instructions',
            'i.ingredient_name',
            'si.quantity'
        )
        .orderBy('step_number')
        .where('r.recipe_id', recipe_id)
    
    const recipes = {
        recipe_name: recipesRows[0].recipe_name,
        steps: recipesRows.reduce((acc, row) => {
            if(!row.ingredient_name){
                return acc.concat({
                    step_number: row.step_number,
                    step_instructions: row.step_instructions
                })
            }else{
               return acc.concat({
                    step_number: row.step_number,
                    step_instructions: row.step_instructions,
                    ingredients: [
                        {
                            ingredient_name: row.ingredient_name,
                            quantity: row.quantity
                        }
                    ]
               }) 
            }
        }, [])
    }

    return recipes 
}

module.exports = {
    getRecipeById
}