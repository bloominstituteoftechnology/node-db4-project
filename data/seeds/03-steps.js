const steps = [
  //Beef Pho
  {step_instructions: 'Slice the beef in thin slices', step_number: 1, recipe_id: 1},
  {step_instructions: 'Bring the water to a boil', step_number: 2, recipe_id: 1},
  {step_instructions: 'Add the rice noodle and stir constantly', step_number: 3, recipe_id: 1},
  //Red Chicken Curry
  {step_instructions: 'Add the red curry paste to the pot', step_number: 1, recipe_id: 2},
  {step_instructions: 'Chop the chicken in small pieces', step_number: 2, recipe_id: 2},
  {step_instructions: 'Add the coconut milk', step_number: 3, recipe_id: 2},
  //Pork Eggrolls
  {step_instructions: 'Roll the eggroll fillings on the rice paper', step_number: 1, recipe_id: 3},
  {step_instructions: 'Slowly place each eggroll in the hot pot of oil', step_number: 2, recipe_id: 3}
]

exports.steps = steps
exports.seed = function(knex){
  return knex('steps').insert(steps)
}
