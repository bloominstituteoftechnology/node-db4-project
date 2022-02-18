
const recipes = [
    {recipe_name: 'toast'},
    {recipe_name: 'salad'},
   
]

const ingredients = [
    {ingredient_name: 'bread', ingredient_unit: '2slices'},
    {ingredient_name: 'cheese', ingredient_unit: '1kg'},
    {ingredient_name: 'greens', ingredient_unit: '100gr'},
    {ingredient_name: 'olive oil', ingredient_unit: '1 tsp'},
    

]

const steps = [
    {step_text: 'toast bread', step_number: 1, recipe_id: 1},
    {step_text: 'make salad', step_number: 2, recipe_id: 1},
    {step_text: 'add olive oil', step_number: 3, recipe_id: 1},
]

const step_ingredients = [

    {step_id: 1, ingredient_id:1, quantity:1 },
    {step_id: 1, ingredient_id:2, quantity:1 },
    {step_id: 2, ingredient_id:3, quantity:1 },
    {step_id: 2, ingredient_id:4, quantity:1 },
    {step_id: 1, ingredient_id:1, quantity:1 },

]

exports.seed = async function (knex) {
   await knex('recipes').insert(recipes)
   await knex('ingredients').insert(ingredients)
   await knex('steps').insert(steps)
   await knex('step_ingredients').insert(step_ingredients)
}