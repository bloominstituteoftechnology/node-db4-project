const steps = [   
  { step_number: 1, step_instructions: 'make meat patty', recipe_id: 1 },
  { step_number: 2, step_instructions: 'season patty', recipe_id: 1 },
  { step_number: 3, step_instructions: 'clean veggies', recipe_id: 1 },
  { step_number: 4, step_instructions: 'slice onion, if needed', recipe_id: 1 },
  { step_number: 5, step_instructions: 'slice tomatoe, if needed', recipe_id: 1 },
  { step_number: 6, step_instructions: 'grill to desired temp', recipe_id: 1 },
  { step_number: 7, step_instructions: 'put cheese on burger', recipe_id: 1 },
  { step_number: 8, step_instructions: 'assemble cheeseburger', recipe_id: 1 },
  { step_number: 9, step_instructions: 'added pickles', recipe_id: 1 },
  { step_number: 10, step_instructions: 'enjoy your meal', recipe_id: 1 },
]

exports.seed = function(knex) {
  return knex('steps').insert(steps);
};

