const recipes = [
  {recipe_name: 'recipe_iem1'},
  {recipe_name: 'recipe_iem2'},
  {recipe_name: 'recipe_iem3'},
  
  ]
  
  const ingredients = [
   {ingredient_name: 'food1', ingeredient_units: 'lbs'},
  {ingredient_name: 'food2', ingeredient_units: 'lbs'},
  {ingredient_name: 'food3', ingeredient_units: 'lbs'},
  {ingredient_name: 'food4', ingeredient_units: 'slices'},
  {ingredient_name: 'food5', ingeredient_units: 'kilos'},
  {ingredient_name: 'food6', ingeredient_units: 'grams' }
  ]
  
  steps = [
      // recipe item 1
  {step_text: 'instruction1', step_number: 1,recipe_id: 1},
  {step_text: 'instruction2', step_number: 2,recipe_id: 1},
  {step_text: 'instruction3', step_number: 1,recipe_id: 1},
  // recipe item 2
  {step_text: 'instruction4', step_number: 2,recipe_id: 2},
  {step_text: 'instruction5', step_number: 3,recipe_id: 2},
  // recipe item 3
  {step_text: 'instruction6', step_number: 1,recipe_id: 3},
  {step_text: 'instruction7', step_number: 2,recipe_id: 3},
  ]
  
  //insert tables with no foreign keys first 
  exports.seed = function (knex ){
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('step_ingredients').insert(step_ingredients)
  }