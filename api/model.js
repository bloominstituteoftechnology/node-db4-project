const db = require('../data/db.config');

const getRecipes = () => db('recipes');

const getStepsByRecipeId = (recipe_id) => {
// SELECT * FROM steps as s
// LEFT JOIN recipes as r
//     ON s.recipe_id = r.recipe_id
// WHERE r.recipe_id = {recipe_id};
    return db('steps as s')
        .join('recipes as r', {
            's.recipe_id':'r.recipe_id'
        })
        .where('r.recipe_id', recipe_id)
        .orderBy('step_number')
};

const getIngredientsByRecipeId = (recipe_id) => {
// SELECT * FROM ingredients as i
// LEFT JOIN recipe_book as rb
//     ON rb.ingredient_id = i.ingredient_id
// WHERE rb.recipe_id = {recipe_id};
    return db('ingredients as i')
        .leftJoin('recipe_book as rb', {
            'rb.ingredient_id':'i.ingredient_id'
        })
        .where('rb.recipe_id', recipe_id)
};

const getRecipeById = async (recipe_id) => {
    const rows = await getStepsByRecipeId(recipe_id);
    const ingredients = await getIngredientsByRecipeId(recipe_id);

    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: new Date(),
        steps: []
    };

    rows.forEach(r => {
        if (r.step_id) {
            result.steps.push({
                step_id: r.step_id,
                step_number: r.step_number,
                step_instructions: r.step_instructions,
                ingredients: ingredients
            })
        }
    })
    return result;
};
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
    getRecipes,
    getRecipeById
};