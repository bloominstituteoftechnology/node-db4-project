const recipes = [
    { recipe_name: 'tacos' },
    { recipe_name: 'pizza' },
    { recipe_name: 'spaghetti' },
]

const ingredients = [
    { ingredient_name: 'tortilla', ingredient_unit: 'oz' },
    { ingredient_name: 'cheese', ingredient_unit: 'oz' },
    { ingredient_name: 'sauce', ingredient_unit: 'oz' },
    { ingredient_name: 'noodles', ingredient_unit: 'oz' },
    { ingredient_name: 'meat', ingredient_unit: 'oz' },

]

const step_ingredients = [
    { quantity: 1, step_id: 1, ingredient_id: 1 },
    { quantity: 2, step_id: 1, ingredient_id: 2 },
    { quantity: 3, step_id: 1, ingredient_id: 3 },
    { quantity: 4, step_id: 2, ingredient_id: 4 },
    { quantity: 5, step_id: 2, ingredient_id: 5 },
    { quantity: 6, step_id: 2, ingredient_id: 1 },
    { quantity: 7, step_id: 3, ingredient_id: 2 },
    { quantity: 8, step_id: 3, ingredient_id: 3 },
    { quantity: 9, step_id: 3, ingredient_id: 4 },

]

const steps = [
    { step_text: 'put it together', step_number: 1, recipe_id: 1 },
    { step_text: 'put it together', step_number: 1, recipe_id: 2 },
    { step_text: 'put it together', step_number: 1, recipe_id: 3 },

]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}