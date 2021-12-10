const recipes = [
  {recipe_name:'Broccoli'},
  {recipe_name:'Mac'},
  {recipe_name:'Salmon'}
]

const ingredients = [
  {ingredient_name:'Broc', ingredient_unit:'lbs'},
  {ingredient_name:'Pesto', ingredient_unit:'lbs'},
  {ingredient_name:'Lemon', ingredient_unit:'lbs'},
  {ingredient_name:'Chicken', ingredient_unit:'kilos'},
  {ingredient_name:'Sal', ingredient_unit:'lbs'},
  {ingredient_name:'Cheese', ingredient_unit:'grams'}
]

const steps = [
  {step_instruction: 'Heat', step_number:1, recipe_id:1},
  {step_instruction: 'Add', step_number:1, recipe_id:1},
  {step_instruction: 'Decrease', step_number:1, recipe_id:1},

  {step_instruction: 'Micro', step_number:1, recipe_id:2},
  {step_instruction: 'Water', step_number:2, recipe_id:2},
  {step_instruction: 'Cook', step_number:3, recipe_id:2},

  {step_instruction: 'Put', step_number:1, recipe_id:3},
  {step_instruction: 'Take', step_number:2, recipe_id:3},
  {step_instruction: 'Cut', step_number:3, recipe_id:3}
]

const steps_ingredients = [
  //broc
  {step_id:2, ingredient_id:1, quantity: 1},
  {step_id:3, ingredient_id:2, quantity: 1},
  {step_id:4, ingredient_id:3, quantity: 1},
  //mac
  {step_id:5, ingredient_id:4, quantity: 1},
  {step_id:6, ingredient_id:5, quantity: 1},
  //salmon
  {step_id:7, ingredient_id:6, quantity: 1},
]
exports.seed = async function(knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('steps_ingredients').insert(steps_ingredients)
  }