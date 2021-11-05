const db = require('./../data/db-config');

async function getRecipeById(recipe_id){
//  const recipeWithSteps = await db('recipes as r')
//     .select("r.*", "rs.step_id", "rs.step_number", "rs.step_instructions")
//     .leftJoin("recipe_steps as rs", "rs.recipe_id", "r.recipe_id")
//     .where("r.recipe_id", recipe_id)
//     .orderBy("rs.step_number", "asc")

//     return recipeWithSteps

const ingredients = await db('ingredients as i')
    .select("i.*", "si.step_id", "si.ingredient_quantity")
    .join("steps_ingredients as si", "si.ingredient_id", "i.ingredient_id")
    .join("recipe_steps as rs", "si.step_id", "rs.step_id")
    .where("recipe_id", recipe_id)

    return ingredients


}
//gets recipes with steps
// SELECT r.*, step_id, step_number, step_instructions
//  FROM recipes as r
//  LEFT JOIN recipe_steps as rs
//  on rs.recipe_id = r.recipe_id
// where r.recipe_id = 1

// SELECT i.*, si.step_id, si.ingredient_quantity
// FROM ingredients as i
// JOIN steps_ingredients as si
// ON si.ingredient_id = i.ingredient_id
// JOIN recipe_steps as rs
// on si.step_id = rs.step_id
// where recipe_id = 2

// {
//     "recipe_id" : 1,
//     "recipe_name": "Spaghetti Bolognese",
//     "created_at": "2021-01-01 08:23:19.120",
//     "steps": [
//       {
//         "step_id": 11,
//         "step_number": 1,
//         "step_instructions": "Put a large saucepan on a medium heat",
//         "ingredients": []
//       },
//       {
//         "step_id": 12,
//         "step_number": 2,
//         "step_instructions": "Add 1 tbsp olive oil",
//         "ingredients": [
//           { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//         ]
//       },
//     ]
//   }

module.exports = {
    getRecipeById
}