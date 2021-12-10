const recipes =[
    {recipe_name:'Broccolei Pesto Pasta'},
    {recipe_name:'Lemon Chicken'},
    {recipe_name:'Salmon'},
]
const ingredients =[
    {ingredient_name:'Broccoli', ingredient_unit:'lbs'},
    {ingredient_name:'Pesto', ingredient_unit:'lbs'},
    {ingredient_name:'Pasta', ingredient_unit:'lbs'},
    {ingredient_name:'Lemon', ingredient_unit:'lbs'},
    {ingredient_name:'Salmon', ingredient_unit:'lbs'},
]
const steps =[
    {step_instructions:'Heat pan', step_number:1, recipe_id:1},
    {step_instructions:'Add broccoli', step_number:2, recipe_id:1},
    {step_instructions:'Add pesto with pasta', step_number:3, recipe_id:1},
    {step_instructions:'Heat oven', step_number:1, recipe_id:2},
    {step_instructions:'Put chicken and lemon in oven', step_number:2, recipe_id:2},
    {step_instructions:'Put in oven at 500 degrees for 20 minutes', step_number:3, recipe_id:2},
    {step_instructions:'Go grab a salmon from the river', step_number:1, recipe_id:3},
    {step_instructions:'Put salmon in oven', step_number:2, recipe_id:3},
]
const step_ingredients=[
    {quantity:3,ingredient_id:1,step_id:2},
    {quantity:3,ingredient_id:2,step_id:3},
    {quantity:3,ingredient_id:4,step_id:5},
    {quantity:3,ingredient_id:5,step_id:7},
]

exports.seed = async function(knex) {
 await knex('recipes').insert(recipes)
 await knex('ingredients').insert(ingredients)
 await knex('steps').insert(steps)
 await knex('step_ingredients').insert(step_ingredients)
};