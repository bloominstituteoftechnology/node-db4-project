const recipes = [
    {recipe_name: 'Broccoli Pesto Pasta'},
    {recipe_name: 'lemon chicken'},
    {recipe_name: 'salmon en papillote'},
]
const ingredients=[
    {ingredient_name: 'broccoli', ingredient_unit: 'lbs'},
    {ingredient_name: 'pesto', ingredient_unit: 'lbs'},
    {ingredient_name: 'pasta', ingredient_unit: 'lbs'},
    {ingredient_name: 'lemon', ingredient_unit: 'slices'},
    {ingredient_name: 'chicken', ingredient_unit: 'kilos'},
    {ingredient_name: 'salmon', ingredient_unit: 'grams'},
]
const step_ingredients=[
    //broccoli pesto pasta
    {step_id:2, ingredient_id:1, quantity:1},
    {step_id:3, ingredient_id:2, quantity:1.5},
    {step_id:3, ingredient_id:3, quantity:2},
    //lemon chicken
    {step_id:5, ingredient_id:4, quantity:1},
    {step_id:5, ingredient_id:5, quantity:0.4},
    //salmon en papillote
    {step_id:7, ingredient_id:6, quantity:1},
]

const steps=[
    //broccoli pesto pasta
    {step_text:'heat pan', step_number:1, recipe_id:1},
    {step_text:'add broccoli', step_number:2, recipe_id:1},
    {step_text:'add pesto mixed with pasta', step_number:3, recipe_id:1},
    //lemon chicken
    {step_text:'heat oven', step_number:1, recipe_id:2},
    {step_text:'put chicken and lemon in oven', step_number:2, recipe_id:2},
    {step_text:'put in oven at 500 degrees', step_number:3, recipe_id:2},
    //salmon en papillote
    {step_text:'fish a salmon in the bidasoa river', step_number:1, recipe_id:3},
    {step_text:'cook salmon', step_number:2, recipe_id:3},
]
exports.seed = async function(knex){
   await knex('recipes').insert(recipes)
   await knex('ingredients').insert(ingredients)
   await knex('steps').insert(steps)
   await knex('step_ingredients').insert(step_ingredients)
}