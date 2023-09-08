// function getRecipeById(recipe_id){
//     return Promise.resolve('awesome')
// }
//以上 Promise.resolve（）是用于检测function是否启用
const db=require('./../../data/db.config')

async function getRecipeById(recipe_id){
    const rows= await db("recipes as r").leftJoin('steps as s', 'r.recipe_id','s.recipe_id')
                                        .leftJoin('step_ingredients as si', 'si.step_id','s.step_id')
                                        .leftJoin('ingredients as i','si.ingredient_id','i.ingredient_id')
                                        .select(
                                            'r.recipe_id',
                                            'r.recipe_name',
                                            's.step_id',
                                            's.step_number',
                                            's.step_instructions',
                                            'si.quantity',
                                            'i.ingredient_id',
                                            'i.ingredient_name'
                                        )
                                   .where('r.recipe_id', recipe_id)
                                   .orderBy('s.step_number')
                                   
    const recipes={
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps:rows.reduce((acc,row)=>{
            if (!row.ingredient_id){
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions:row.step_instructions,
                    ingredients: []
                })        
            }
            if(row.ingredient_id && !acc.find(step=>step.step_id===row.step_id)){
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
            const currentStep=acc.find(step=>step.step_id===row.step_id)
            currentStep.ingredients.push({
                
                    ingredient_id: row.ingredient_id,
                    ingredient_name: row.ingredient_name,
                    quantity: row.quantity
                
            })
            return acc

        },[])
    }
   return recipes
}

module.exports={
    getRecipeById
}