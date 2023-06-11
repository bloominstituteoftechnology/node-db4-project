const db = require('../../data/db-config')

async function getRecipeById(recipes_id){
   const recipeRows = await db('recipes as r')
   .leftJoin('steps as s', 'r.recipes_id', 's.recipes_id')
   .leftJoin('steps_ingredients as si', 'si.steps_id', 's.steps_id')
   .leftJoin('ingredients as ing', 'ing.ing_id', 'si.ing_id')
   .select(
    'r.recipes_id',
    'r.recipes_name',
    's.steps_id',
    's.steps_order',
    's.instructions',
    'si.ing_id',
    'ing.ing_name',
    'ing.ing_unit'
   )
   .orderBy('s.steps_order')
   .where('r.recipes_id', recipes_id)
   
   
   const result = {
    recipes_id: recipeRows[0].recipes_id,
    recipes_name: recipeRows[0].recipes_name,
    steps: recipeRows.reduce((acc, row) => {
       if(!row.ingredient_id) {
        return acc.concat({
            steps_id: row.steps_id,
            steps_order: row.steps_order,
            instructions: row.instructions
        })
       }
       if(row.ingredient_id && !acc.find(step => step.id === row.step_id)){
        return acc.count({
            steps_id: row.steps_id,
            steps_order: row.steps_order,
            instructions: row.instructions,
            ingredients: [
                {
                    ing_id: row.ing_id,
                    ing_name: row.ing_name,
                    ing_unit: row.ing_unit
                }
            ]
        })
       }
       const currentStep = acc.find(step => step.step_id === row.step_id)
       currentStep.ingredients.push({
        ing_id: row.ing_id,
        ing_name: row.ing_name,
        ing_unit: row.ing_unit
       })
       return acc
    }, [])
   }
   

   return result
}

module.exports = {
    getRecipeById
}