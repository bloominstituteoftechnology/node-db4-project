const recipes = [
    { recipe_name: 'Chocolate Cake' },
    { recipe_name: 'Spaghetti Bolognese' },
    { recipe_name: 'Chicken Alfredo' },
]

const ingredients = [
    { ingredient_name: 'Flour' },
    { ingredient_name: 'Sugar' },
    { ingredient_name: 'Eggs' },
    { ingredient_name: 'Chocolate' },
    { ingredient_name: 'Tomato Sauce' },
    { ingredient_name: 'Ground Beef' },
    { ingredient_name: 'Chicken' },
    { ingredient_name: 'Cream' },
    { ingredient_name: 'Pasta' },
]

const steps = [
    { step_instructions: 'Preheat oven to 350°F', step_number: 1, recipe_id: 1 },
    { step_instructions: 'Mix flour, sugar, and eggs', step_number: 2, recipe_id: 1 },
    { step_instructions: 'Melt chocolate and add to the mixture', step_number: 3, recipe_id: 1 },
]

const step_ingredients = [
    { step_id: 2, ingredient_id: 1, quantity: 1.4 },
    { step_id: 2, ingredient_id: 2, quantity: 0.5},
    { step_id: 3, ingredient_id: 4, quantity: 2.4},

]

exports.seed = async function(knex) {
   await knex('recipes').insert(recipes)
   await knex('ingredients').insert(ingredients)
   await knex('steps').insert(steps)
   await knex('step_ingredients').insert(step_ingredients)
};