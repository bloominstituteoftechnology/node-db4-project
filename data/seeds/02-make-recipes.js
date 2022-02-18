const recipes = [
    { recipe_name: 'brocoli pesto pasta'},
    { recipe_name: 'lemon pepper chicken'},
    { recipe_name: 'Baked salmon'},

]

const ingredients = [
    {ingredient_name: 'brocoli', ingredient_unit: 'lbs'}
    {ingredient_name: 'pasta', ingredient_unit: 'kg'}
    {ingredient_name: 'pesto', ingredient_unit: 'lbs'}
    {ingredient_name: 'lemon pepper', ingredient_unit: 'lbs'}
    {ingredient_name: 'chicken', ingredient_unit: 'oz'}
    {ingredient_name: 'salmon', ingredient_unit: 'kg'}
]

const step_ingredients = [
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 3, ingredient_id: 2, quantity: 1.5},
    {step_id: 3, ingredient_id: 3, quantity: 2},

    {step_id: 5, ingredient_id: 4, quantity: 1},
    {step_id: 5, ingredient_id: 5, quantity: 0.4},

    {step_id: 7, ingredient_id: 6, quantity: 1},
]


const steps = [

    //pasta
    {step_text: 'heat pan', step_number: 1, recipe_id: 1},
    {step_text: 'add broccoli', step_number: 2, recipe_id: 1},
    {step_text: 'add pesto mixed with pasta', step_number: 3, recipe_id: 1},

    //chicken
    {step_text: 'heat oven', step_number: 1, recipe_id: 2},
    {step_text: 'cover in lemon pepper', step_number: 2, recipe_id: 2},
    {step_text: 'cook chicken in oven', step_number: 3, recipe_id: 2},

    //salmon
    {step_text: 'fish a salmon and season it', step_number: 1, recipe_id: 3},
    {step_text: 'cook fish', step_number: 2, recipe_id: 3},
]

exports.seed = async function (knex) {

    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)

}