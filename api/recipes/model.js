const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', '=', 's.recipe_id')
        .leftJoin('step_ingredients as si', 'si.step_id', '=', 's.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', '=', 'si.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            'r.created_at',
            's.step_id',
            's.step_number',
            's.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.quantity'
        )
        .orderBy('s.step_number')
        .where('s.recipe_id', recipe_id)

        //console.log(recipeRows);

        const recipes = {
          recipe_id: recipeRows[0].recipe_id,
          recipe_name: recipeRows[0].recipe_name,
          steps: recipeRows.reduce((acc,row) => {
            // new step without any ingredients
            if(!row.ingredient_id || row.ingredient_id == null){
              return acc.concat({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
              })
            }
            // new step with a single ingredient
            if(row.ingredient_id && !acc.find(step=>step.step_id === row.step_id)){
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
            // new step with multiple ingredients (repeat step, different ingredient)
            const currentStep = acc.find(step=>step.step_id === row.step_id)
            currentStep.ingredients.push({
              ingredient_id: row.ingredient_id,
              ingredient_name: row.ingredient_name,
              quantity: row.quantity
            })
            
            return acc;
          }, [])
        }

        return recipes

    // let result = rows.reduce((acc, row) => {
    //   //console.log(row);
    //     if (row.step_number) {
    //         acc.steps.push({ step_id: row.step_id, step_number: row.step_number, step_instructions: row.step_instructions, ingredients: [] })
            
    //         // if (rows.steps.ingredients) {
    //         //     acc.steps.ingredients.push({ ingredient_id: row.ingredient_id, ingredient_name: row.ingredient_name, quantity: row.quantity })
    //         // }
    //     }
    //     //console.log(acc);
    //     return acc;
    // }, {
    //     recipe_id: rows[0].recipe_id,
    //     recipe_name: rows[0].recipe_name,
    //     created_at: rows[0].created_at,
    //     steps: []
    // })
    
    // //console.log(result);
    // return result;
}

/**
 * {
  "recipe_id" : 1,
  "recipe_name": "Spaghetti Bolognese",
  "created_at": "2021-01-01 08:23:19.120",
  "steps": [
    {
      "step_id": 11,
      "step_number": 1,
      "step_instructions": "Put a large saucepan on a medium heat",
      "ingredients": []
    },
    {
      "step_id": 12,
      "step_number": 2,
      "step_instructions": "Add 1 tbsp olive oil",
      "ingredients": [
        { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
      ]
    },
  ]
}
 * 
 * 
 * 
 * SELECT 
r.recipe_id
,r.recipe_name
,r.created_at
,s.step_id
,s.step_number
,s.step_instructions
,si.ingredient_id
,i.ingredient_name
,si.quantity
FROM recipes r
LEFT JOIN steps s
ON r.recipe_id = s.recipe_id
INNER JOIN step_ingredients si
ON s.step_id = si.step_id
LEFT JOIN ingredients i
ON si.ingredient_id = i.ingredient_id
 */

module.exports = {
    getRecipeById
}