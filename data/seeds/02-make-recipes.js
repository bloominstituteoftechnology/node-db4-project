const recipes = [
    {recipe_name: "pasta"},
    {recipe_name: "chicken"},
    {recipe_name: "fish"}

]

const ingredients= [
    {ingredients_name: 'broccoli', ingredients_unit: 'lbs'},
    {ingredients_name: 'pesto', ingredients_unit: 'lbs'},
    {ingredients_name: 'pasta', ingredients_unit: 'lbs'},
    {ingredients_name: 'lemon', ingredients_unit: 'slices'},
    {ingredients_name: 'chicken', ingredients_unit: 'kilos'},
    {ingredients_name: 'salmon', ingredients_unit: 'grams'},
]

const step_ingredients = [
    {step_id: '2', ingredients_id: 1 , quantity: 1},
    {step_id: '3', ingredients_id: 2, quantity:1.5 },
    {step_id: '3', ingredients_id: 3, quantity: 2},

    {step_id: '5', ingredients_id: 4 , quantity: 1},
    {step_id: '5', ingredients_id: 5 , quantity: 0.4},

    {step_id: '7', ingredients_id: 6 , quantity: 1},
]

const steps =[
    {steps_text: 'heat pan', step_number: 1, recipe_id: 1},
    {steps_text: 'add broccoli', step_number: 2, recipe_id: 1},
    {steps_text: 'mix pesto and pasta', step_number: 3, recipe_id: 1},

    {steps_text: 'heat oven', step_number: 1, recipe_id: 2},
    {steps_text: 'put chicken and lemon in oven', step_number: 2, recipe_id: 2},
    {steps_text: 'heat oven to 500 for 1hour', step_number: 3, recipe_id: 2},

    {steps_text: 'defrost fish', step_number: 1, recipe_id: 3},
    {steps_text: 'put in pan heat till done', step_number: 2, recipe_id: 3},
    

]


exports.seed =  async function(knex){
await knex('recipes').insert(recipes)
await knex('ingredients').insert(ingredients)
await knex('steps').insert(steps)
await knex('step_ingredients').insert(step_ingredients)

}