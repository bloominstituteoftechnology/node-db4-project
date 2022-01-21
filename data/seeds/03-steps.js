const steps = [
  //Broccoli Pesto Pasta
  {step_instructions: 'Heat Pan', step_number: 1, recipe_id: 1},
  {step_instructions: 'Add broccoli', step_number: 2, recipe_id: 1},
  {step_instructions: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1},
  //Lemon Chicken
  {step_instructions: 'Heat oven', step_number: 1, recipe_id: 2},
  {step_instructions: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2},
  {step_instructions: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2},
  //Salmon en Papillote
  {step_instructions: 'Fish a salmon in the Bidasoa river', step_number: 1, recipe_id: 3},
  {step_instructions: 'Cook salmon', step_number: 2, recipe_id: 3}
]

exports.steps = steps
exports.seed = function(knex){
  return knex('steps').insert(steps)
}
