const db = require('../data/db-config.js');

async function getRecipeById(id){
    let resultsRecipeSteps = await db('recipes as rec')
        .leftJoin('steps', 'rec.recipe_id', 'steps.recipe_id')
        .select('*')
        .where('rec.recipe_id', id)

    if(resultsRecipeSteps.length === 0){
        return null;
    }

    const recipe = {
        recipe_id: resultsRecipeSteps[0].recipe_id,
        recipe_name: resultsRecipeSteps[0].recipe_name,
        created_at: resultsRecipeSteps[0].created_at,
        steps: [],
    }

    for (let step of resultsRecipeSteps ){
        if(step.step_instructions !== null){
            let ingredientsArr = []
            
            await getIngredientsById(step.step_id)
                .then(ingredients => {
                    ingredientsArr = ingredients 
                })
            
                recipe.steps.push({
                step_id: step.step_id,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                ingredients: ingredientsArr
            })
        }    
    }
    
    // console.log(recipe)
    return recipe;
}

async function getIngredientsById(id){
    let resultsStepIngredients = await db('steps')
            .leftJoin('ingredients as i', 'i.step_id', 'steps.step_id')
            .select('*')
            .where('steps.step_id', id)
        
    if(resultsStepIngredients.length === 0){
        return null;
    }

    let arrIngredients = []

    for(let ingredient of resultsStepIngredients){
        if(ingredient.ingredient_name !== null){
            arrIngredients.push({
                ingredient_id: ingredient.ingredient_id,
                ingredient_name: ingredient.ingredient_name,
                quantity: ingredient.quantity
            })
        }
    }
    return arrIngredients
}

module.exports = { getRecipeById, getIngredientsById }