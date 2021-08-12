const db = require("../../data/db-config");

async function getRecipeById(recipe_id){
    
    const data = await db("step-ingredients as si")
    .join("steps as st", "si.step_id","st.step_id")
    .leftJoin("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .join("recipes as r", "st.recipe_id","r.recipe_id")
    .where("r.recipe_id",recipe_id)
    .orderBy("st.step_id");
    
    // .join("ingredients as i");
    // const data = await  db("recipes as r")
    // .join("steps as st", "r.recipe_id","st.recipe_id")
    // .join("step-ingredients as si", "st.step_id","si.step_id")
    // .leftJoin("ingredients as i", "si.ingredient_id","i.ingredient_id")
    // .where("r.recipe_id",recipe_id)
    // .orderBy("st.step_id");

    console.log(data);
    return {
        recipe_id:data[0].recipe_id,
        recipe_name:data[0].recipe_name,
        created_at: data[0].created_at,
        steps: data.map(step=>{
            if(step.step_id){
                return{
                    step_id: step.step_id,
                    step_number: step.step_number,
                    step_instructions: step.step_instructions,
                    ingredients: data.map(i=>{
                        if(i.step_id === step.step_id){
                            return{
                                ingredient_id: i.ingredient_id,
                                ingredient_name: i.ingredient_name,
                                quantity: i.quantity
                            }
                        }
                    })
                }
            }
        }).filter(element=> element!==null)
    };
}


module.exports = {
    getRecipeById
}