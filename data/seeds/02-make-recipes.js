const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Salmon en Papillote' }
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pesto', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'Lemon', ingredient_unit: 'slices' },
    { ingredient_name: 'Chicken', ingredient_unit: 'kilos' },
    { ingredient_name: 'Salmon', ingredient_unit: 'grams' },
]

const steps = [
    //Broccoli Recipe
    { step_instructions: 'Heat pan', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Add broccoli', step_number: 2, recipe_id: 1 },
    { step_instructions: 'Add pesto mixed with Pasta', step_number: 3, recipe_id: 1 },
    //Chicken Recipe
    { step_instructions: 'Heat oven', step_number: 1, recipe_id: 2 },
    { step_instructions: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2 },
    { step_instructions: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2 },
    //Salmon Recipe
    { step_instructions: 'Fish a salmon in the Bidasoa river', step_number: 1, recipe_id: 3 },
    { step_instructions: 'Cook salmon', step_number: 2, recipe_id: 3 },
]

const step_ingredients = [
    //Broccoli Recipe
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 1 },
    //Chicken Recipe
    { step_id: 5, ingredient_id: 4, quantity: 1 },
    { step_id: 5, ingredient_id: 5, quantity: 0.4 },
    //Salmon Recipe
    { step_id: 7, ingredient_id: 6, quantity: 1 },
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}