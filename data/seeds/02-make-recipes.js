const recipes = [
    {recipe_name: 'Chicken Alfredo Pasta'},
    {recipe_name: 'Lemon Mayo Salmon'},
    {recipe_name: 'Beef Roast'},
]

const step_ingredients = [
// Chicken Alfredo Pasta
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 3, ingredient_id: 2, quantity: 1.5},
    {step_id: 3, ingredient_id: 3, quantity: 2},
// Lemon Mayo Salmon
    {step_id: 5, ingredient_id: 4, quantity: 1},
    {step_id: 5, ingredient_id: 5, quantity: 0.4},
// Beef Roast
    {step_id: 7, ingredient_id: 6, quantity: 1},
]

const ingredients = [
    {ingredient_name: 'Chicken', ingredient_unit: 'lbs'},
    {ingredient_name: 'Alfredo', ingredient_unit: 'lbs'},
    {ingredient_name: 'Pasta', ingredient_unit: 'lbs'},
    {ingredient_name: 'Lemon Mayo', ingredient_unit: 'slices'},
    {ingredient_name: 'Salmon', ingredient_unit: 'kilos'},
    {ingredient_name: 'Beef', ingredient_unit: 'grams'},
]
const steps = [
// Chicken Alfredo Pasta
    {step_text: 'Heat pan', step_number: 1, recipe_id: 1},
    {step_text: 'Add chicken', step_number: 2, recipe_id: 1},
    {step_text: 'Add alfredo mixed with pasta', step_number: 3, recipe_id: 1},
// Lemon Mayo Salmon
    {step_text: 'Heat oven', step_number: 1, recipe_id: 2},
    {step_text: 'Put chicken and lemon mayo in oven', step_number: 2, recipe_id: 2},
    {step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2},
// Beef Roast
    {step_text: 'Go to store and buy fine beef', step_number: 1, recipe_id: 3},
    {step_text: 'Marinate Beef and add any sides', step_number: 2, recipe_id: 3},
    {step_text: 'Cook Beef', step_number: 3, recipe_id: 3},
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}