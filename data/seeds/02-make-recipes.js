const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Salmon en Papillote' },
]

const ingredients = [
    { ingredients_name: 'Broccoli', ingredients_unit: 'lbs' },
    { ingredients_name: 'Pesto', ingredients_unit: 'lbs' },
    { ingredients_name: 'Pasta', ingredients_unit: 'lbs' },
    { ingredients_name: 'Lemon', ingredients_unit: 'slices' },
    { ingredients_name: 'Chicken', ingredients_unit: 'kilos' },
    { ingredients_name: 'Salmon', ingredients_unit: 'grams' },
]

const step_ingredients = [
    // Broccoli Pesto Pasta
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 2 },
    // Lemon Chicken
    { step_id: 5, ingredient_id: 4, quantity: 1 },
    { step_id: 5, ingredient_id: 5, quantity: 0.4 },
    // Salmon en Papillote
    { step_id: 7, ingredient_id: 6, quantity: 1 },
]

const steps = [
    // Broccoli Pesto Pasta
    { step_text: 'Heat pan', step_number: 1, recipe_id: 1 },
    { step_text: 'Add broccoli', step_number: 2, recipe_id: 1 },
    { step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1 },
    // Lemon Chicken
    { step_text: 'Heat pan', step_number: 1, recipe_id: 2 },
    { step_text: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2 },
    { step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2 },
    // Salmon en Papillote
    { ingredients_name: 'Fish a salmon in the Bidasoa river', step_number: 1, recipe_id: 3 },
    { ingredients_name: 'Cook salmon', step_number: 2, recipe_id: 3 },
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}