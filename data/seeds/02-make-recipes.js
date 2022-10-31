const recipes = [
    { recipe_name: 'Broccoli Rice Casserole' },
    { recipe_name: 'Spaghetti' },
    { recipe_name: 'Salmon' }
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs' },
    { ingredient_name: 'Rice', ingredient_unit: 'lbs' },
    { ingredient_name: 'Cream Of Chicken Soup', ingredient_unit: 'can' },
    { ingredient_name: 'Noodles', ingredient_unit: 'box' },
    { ingredient_name: 'Marinara', ingredient_unit: 'jar' },
    { ingredient_name: 'Salmon', ingredient_unit: 'lbs' },
    { ingredient_name: 'Lemon', ingredient_unit: 'slices' },
    { ingredient_name: 'Olive Oil', ingredient_unit: 'Tbs' }
]

const steps = [
    //broccoli rice casserole
    { step_instructions: 'Preheat oven to 450 degrees', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Cook rice', step_number: 2, recipe_id: 1 },
    { step_instructions: 'Add rice to pan', step_number: 3, recipe_id: 1 },
    { step_instructions: 'Add broccoli', step_number: 4, recipe_id: 1 },
    { step_instructions: 'Add soup', step_number: 5, recipe_id: 1 },
    { step_instructions: 'Cook for 30 mins', step_number: 6, recipe_id: 1 },
    //spaghetti
    { step_instructions: 'Cook noodles', step_number: 1, recipe_id: 2 },
    { step_instructions: 'Warm up marinara sauce', step_number: 2, recipe_id: 2 },
    { step_instructions: 'Add marinara to noodles', step_number: 3, recipe_id: 2 },
    //salmon
    { step_instructions: 'Skin salmon', step_number: 1, recipe_id: 3 },
    { step_instructions: 'Add olive oil to pan', step_number: 2, recipe_id: 3 },
    { step_instructions: 'Cook salmon in pan for 15 mins', step_number: 3, recipe_id: 3 },
    { step_instructions: 'Plate salmon and add lemon', step_number: 4, recipe_id: 3 }
]

const step_ingredients = [
    //broccoli rice casserole
    { step_id: 2, ingredient_id: 2, quantity: 2 },
    { step_id: 4, ingredient_id: 1, quantity: 1 },
    { step_id: 5, ingredient_id: 2, quantity: 2 },
    //spaghetti
    { step_id: 7, ingredient_id: 4, quantity: 1 },
    { step_id: 8, ingredient_id: 5, quantity: 1 },
    //salmon
    { step_id: 10, ingredient_id: 6, quantity: 2 },
    { step_id: 11, ingredient_id: 8, quantity: 2 },
    { step_id: 13, ingredient_id: 7, quantity: 2 }
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}