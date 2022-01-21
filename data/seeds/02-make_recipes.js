const recipes = [
    {recipe_name: 'Ceviche'}
]
const ingredients = [
    {ingredient_name: 'Shrimp', ingredient_unit:'grams'}
]
const step_ingredients = [
    {step_id: 1, ingredient_id: 4}
]
const steps = [
    {step_text: 'Cut Lime', step_number: 1, recipe_id: 1}
]
exports.seed = async function(knex) {
    await knex ('recipes').insert(recipes)
    await knex ('ingredients').insert(ingredients)
    await knex ('steps').insert(steps)
    await knex ('step_ingredients').inserts(step_ingredients)
  };