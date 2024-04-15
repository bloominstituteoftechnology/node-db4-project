const recipes = [
  {recipe_name: 'Chicken and Rice'},
  {recipe_name: 'Lemon Chicken and Rice'},
  {recipe_name: 'Salmon Rice Bowls and Zucchini'}
]

const ingredients = [
  { ingredient_name: 'Chicken Breast', ingredient_unit: 'lbs'},
  { ingredient_name: 'Rice', ingredient_unit: 'Cups'},
  { ingredient_name: 'Lemon Juice', ingredient_unit: 'Tbsp'},
  { ingredient_name: 'Salmon', ingredient_unit: 'Fish'},
  { ingredient_name: 'Zucchini', ingredient_unit: 'Cups'}
]

const step_ingredients = [
  // Chicken and Rice
  { step_id: 2, ingredient_id: 1, quantity: 1},
  { step_id: 3, ingredient_id: 2, quantity: 2},
  // Lemon Chicken With Rice
  { step_id: 6, ingredient_id: 3, quantity: 1},
  { step_id: 6, ingredient_id: 1, quantity: 2},
  { step_id: 6, ingredient_id: 2, quantity: 2},

  // Salmon Rice Bowls and Zucchini
  { step_id: 8, ingredient_id: 4, quantity: 1},
  { step_id: 9, ingredient_id: 5, quantity: 1},
  { step_id: 9, ingredient_id: 2, quantity: 1},
  { step_id: 9, ingredient_id: 4, quantity: 1}
]

const steps = [
  // Chicken and Rice
  { step_text: 'Heat 2 pans over medium heat', step_number: 1, recipe_id: 1},
  { step_text: 'Add Chicken to the first pan', step_number: 2, recipe_id: 1},
  { step_text: 'Add Rice to the second pan', step_number: 3, recipe_id: 1},
  { step_text: 'Mix chicken with rice and enjoy', step_number: 4, recipe_id: 1},
  // Lemon Chicken With Rice
  {step_text: 'Heat oven', step_number: 1, recipe_id: 2},
  {step_text: 'Put lemon, chicken, and rice in oven at 425F', step_number: 2, recipe_id: 2},
  {step_text: 'Let cool for 5 min and serve', step_number: 3, recipe_id: 2},
  // Salmon Rice Bowls and Zucchini
  {step_text: 'Catch a salmon in the nearest river', step_number: 1, recipe_id: 3},
  {step_text: 'Cook rice, salmon, and zucchini', step_number: 2, recipe_id: 3},
  {step_text: 'Server with any sauce!', step_number: 3, recipe_id: 3},
]



exports.seed = async function (knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('step_ingredients').insert(step_ingredients)
}

