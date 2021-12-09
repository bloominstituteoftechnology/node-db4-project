const recipes = [
  { recipe_name: 'Grilled Chicken' },
  { recipe_name: 'Ramen Noodles'},
  { recipe_name: 'Peanut Butter & Jelly Sandwich'}
]

const ingredients = [
  { ingredient_name: 'Chicken Breast', ingredient_unit: 'oz' },
  { ingredient_name: 'Olive Oil', ingredient_unit: 'g' },
  { ingredient_name: 'Dry Ramen', ingredient_unit: 'packages' },
  { ingredient_name: 'Ramen Flavor Packet', ingredient_unit: 'packages' },
  { ingredient_name: 'Wheat Bread', ingredient_unit: 'slices' },
  { ingredient_name: 'Peanut Butter', ingredient_unit: 'g' },
  { ingredient_name: 'Jelly', ingredient_unit: 'g' }
]

const steps = [
  //CHICKEN
  { step_instructions: 'heat up grill', step_number: 1, recipe_id: 1},
  { step_instructions: 'oil chicken', step_number: 2, recipe_id: 1},
  { step_instructions: 'place chicken on grill', step_number: 3, recipe_id: 1},
  { step_instructions: 'flip chicken after 5 mins', step_number: 4, recipe_id: 1},
  { step_instructions: 'remove chicken after 5 mins', step_number: 5, recipe_id: 1},
  //RAMEN
  { step_instructions: 'heat up water', step_number: 1, recipe_id: 2},
  { step_instructions: 'cook ramen', step_number: 2, recipe_id: 2},
  { step_instructions: 'apply seasoning', step_number: 3, recipe_id: 2},
  //PB&J
  { step_instructions: 'apply peanut butter to bread', step_number: 3, recipe_id: 3},
  { step_instructions: 'apply jelly to bread', step_number: 2, recipe_id: 3},
  { step_instructions: 'put bread together', step_number: 3, recipe_id: 3},
  { step_instructions: 'cut sandwich in halves', step_number: 4, recipe_id: 3},

]

const steps_ingredients = [
  //CHICKEN
  { step_id:2, ingredient_id:1, quantity: 8},
  { step_id:2, ingredient_id:2, quantity: 4},
  //RAMEN
  { step_id:7, ingredient_id:3, quantity: 1},
  { step_id:8, ingredient_id:4, quantity: 1},
  //PB&J
  { step_id:9, ingredient_id:5, quantity: 1},
  { step_id:9, ingredient_id:6, quantity: 5},
  { step_id:10, ingredient_id:5, quantity: 1},
  { step_id:10, ingredient_id:7, quantity: 5},
]

exports.seed = async function (knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('steps_ingredients').insert(steps_ingredients)
}


