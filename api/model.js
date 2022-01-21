const db = require('../db-config')

async function getRecipeById(recipe_id){

    /*
       
        select 
            st.*,r.recipe_name,i.*,si.quantity
        from steps as st 
        join recipes as r
            on st.recipe_id = r.recipe_id
        join ingredients as i
            on si.ingredient_id = i.ingredient_id
        left join steps_ingredients as si
            on st.step_id = si.step_id
        where st.recipe_id = 2;

    */

    const row1 = await db('steps as st')
            .join('recipes as r','st.recipe_id', 'r.recipe_id')
            .join('ingredients as i','si.ingredient_id','i.ingredient_id')
            .leftJoin('steps_ingredients as si','st.step_id','si.step_id')
            .select('st.*','r.recipe_name','i.*','si.quantity',)
            .where('st.recipe_id',recipe_id)
    
    const result = {
        recipe_id: row1[0].recipe_id,
        recipe_name:row1[0].recipe_name,
        
        steps: [
            row1.map(step => {
                return{
                    step_id: step.step_id,
                    step_number: step.step_number,
                    step_instructions:step.step_number,
                    ingredients: [
                        {
                            ingredient_id : step.ingredient_id,ingredient_name:step.ingredient_name,quantity:step.quantity
                        }

                    ]
                }
            })
            
        ]

    }
    return result;
}

module.exports = {
    getRecipeById
}