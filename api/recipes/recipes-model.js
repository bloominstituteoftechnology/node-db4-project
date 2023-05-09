const db = require('../../data/db-config')

async function getAllRecipes(){
    const allRecipes = await db('recipes')

    return allRecipes
}

async function getRecipeById(recipe_id){ //eslint-disable-line
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            's.step_id',
            's.step_number',
            's.step_text',
            'i.ingredient_id',
            'i.ingredients_name',
            'si.quantity',
        )
        .orderBy('s.step_number')
        .where('r.recipe_id', recipe_id)
    
    const recipes = {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        steps: recipeRows.reduce((acc, row)=> {
            if(!row.ingredient_id){

                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_text: row.step_text
                })

            }

            if(row.ingredient_id && !acc.find(step => step.step_id === row.step_id)) {

                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_text: row.step_text,
                    ingredients: [
                        {
                            ingredient_id: row.ingredient_id,
                            ingredients_name: row.ingredients_name,
                            quantity: row.quantity,
                        }
                    ]
                })
            }

            const currentStep = acc.find(step => step.step_id === row.step_id)
                currentStep.ingredients.push({
                    ingredient_id: row.ingredient_id,
                    ingredients_name: row.ingredients_name,
                    quantity: row.quantity,
                })

        return acc

        },[])
    }

    return recipes

    }

module.exports = {
    getRecipeById,
    getAllRecipes
}