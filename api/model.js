const db = require("../data/db-config");

async function getRecipeById(recipe_id) {
  
    // select 
    //     r.recipe_id, r.recipe_name, s.step_id, s.step_number, s.step_instructions
    // from recipes as r
    // left join steps as s
    //     on r.recipe_id = s.recipe_id
    // where r.recipe_id = 1; 
    const rows =  await db("recipes as r")
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .select('r.recipe_id', 'r.recipe_name', 's.step_id', 's.step_number', 's.step_instructions')
        .where("r.recipe_id", recipe_id)
        .orderBy('s.step_number');
    
    const instructions = await db();

    const recipe = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps: []
    }

    rows.forEach(step => {
        recipe.steps.push({
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.step_instructions
        });
    });

    


    return recipe;
}


module.exports = { getRecipeById };
