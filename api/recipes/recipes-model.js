const db= require('../../data/db.config')

async function getRecipeById(recipe_id){
        const recipeRows= await db('recipes as r')
        .leftJoin('steps as s','r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            's.step_id',
            's.step_number',
            's.step_text',
           'i.ingredient_id',
           'i.ingredient_name'
        )
        .orderBy('s.step_number')
        .where('r.recipe_id', recipe_id)

        const recipes ={
            recipe_id: recipeRows[0].recipe_id,
            recipe_name: recipeRows[0].recipe_name,
            steps: recipeRows.reduce((acc, row)=>{
                //its a new step without any ingredients
                    if(!row.ingredient_id){
                        return acc.concat({
                            step_id: row.step_id,
                            step_number: row.step_number,
                            step_text: row.step_text
                        })
                        }
                        if(row.ingredient_id && !acc.find(step => step.step_id === row.step_id)){
                            //its  a new step with the ingredient
                            return acc.concat({
                            step_id: row.step_id,
                            step_number: row.step_number,
                            step_text: row.step_text,
                            ingredients:[
                                {
                                    ingredient_id: row.ingredient_id,
                                    ingredient_name: row.ingredient_name,
                                    quantity: row.quantity, 
                                }
                            ]     
                            })
                    }
                    //its a step we have encountered before
                    const repeatingStep= acc.find(step => step.step_id === row.step_id)
                    repeatingStep.ingredients.push({
                        ingredient_id: row.ingredient_id,
                        ingredient_name: row.ingredient_name,
                        quantity: row.quantity, 
                    })
                    return acc
            }, [])

        }
        return recipes
}

module.exports={
    getRecipeById
}