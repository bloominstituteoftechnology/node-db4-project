const recipes = [
    {recipe_name: "pasta"},
    {recipe_name: "chicken"},
    {recipe_name: "fish"}

]

const ingredients= [
    {ingredient_name: 'broccoli', ingredient_unit: 'lbs'},
    {ingredient_name: 'pesto', ingredient_unit: 'lbs'},
    {ingredient_name: 'pasta', ingredient_unit: 'lbs'},
    {ingredient_name: 'lemon', ingredient_unit: 'slices'},
    {ingredient_name: 'chicken', ingredient_unit: 'kilos'},
    {ingredient_name: 'salmon', ingredient_unit: 'grams'},
]

const step_ingredients = [
    {step_id: '2', ingredient_id: 1 , quantity: 1},
    {step_id: '3', ingredient_id: 2, quantity:1.5 },
    {step_id: '3', ingredient_id: 3, quantity: 2},

    {step_id: '5', ingredient_id: 4 , quantity: 1},
    {step_id: '5', ingredient_id: 5 , quantity: 0.4},

    {step_id: '7', ingredient_id: 6 , quantity: 1},
]

const steps =[
    {step_text: 'heat pan', step_number: 1, recipe_id: 1},
    {step_text: 'add broccoli', step_number: 2, recipe_id: 1},
    {step_text: 'mix pesto and pasta', step_number: 3, recipe_id: 1},

    {step_text: 'heat oven', step_number: 1, recipe_id: 2},
    {step_text: 'put chicken and lemon in oven', step_number: 2, recipe_id: 2},
    {step_text: 'heat oven to 500 for 1hour', step_number: 3, recipe_id: 2},

    {step_text: 'defrost fish', step_number: 1, recipe_id: 3},
    {step_text: 'put in pan heat till done', step_number: 2, recipe_id: 3},
    

]


exports.seed =  async function(knex){
await knex('recipes').insert(recipes)
await knex('ingredients').insert(ingredients)
await knex('steps').insert(steps)
await knex('step_ingredients').insert(step_ingredients)

}