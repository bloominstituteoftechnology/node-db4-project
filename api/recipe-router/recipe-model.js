const db = require('../../data/db-config')


function findId(id){
    return db('recipes').where('recipe_id', id)
}



async function getRecipeById(id){
    const recipeObj =  await db('recipes as r')
    .select('r.recipe_id', 'r.recipe_name', 's.steps_id', 's.step_number', 's.step_instructions')
    .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', id)

    const ingredientObj = await db('measurements as m')
    .select('m.recipe_id', 'm.steps_id', 'm.ingredient_id', 'i.ingredient_name','m.quantity')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'm.ingredient_id')
    .where('m.recipe_id', id)
 
    return{
        recipe_id : recipeObj[0]['recipe_id'],
        recipe_name: recipeObj[0]['recipe_name'],
        steps:recipeObj.map(a=>{
            return{
                steps_id: a.steps_id,
                step_number: a.step_number,
                step_instructions: a.step_instructions,
                ingredients: ingredientObj.filter(b=>b.steps_id == a.steps_id && b.recipe_id == a.recipe_id).map(c=>{
                    return{
                        ingredient_id: c.ingredient_id,
                        ingredient_name: c.ingredient_name,
                        quantity: c.quantity
                    }
                })
            }
        })
    }
}


module.exports ={
    getRecipeById,
    findId
}