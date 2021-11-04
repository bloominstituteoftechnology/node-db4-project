
exports.seed = function (knex) {
  return knex('steps').insert([
    { step_number: 1, step_instructions: 'Put water, oil and pasta into large pot', recipe_id: 1 },
    { step_number: 2, step_instructions: 'Turn heat on high and let boil for 10 minutes', recipe_id: 1 },
    { step_number: 3, step_instructions: 'Drain pasta', recipe_id: 1 },
    { step_number: 4, step_instructions: 'Add marinara sauce', recipe_id: 1 },
    { step_number: 1, step_instructions: 'Shred cheese and put inside of tortilla', recipe_id: 2 },
    { step_number: 2, step_instructions: 'Fold tortilla in half with cheese on the inside', recipe_id: 2 },
    { step_number: 3, step_instructions: 'Put oil into skillet', recipe_id: 2 },
    { step_number: 4, step_instructions: 'Turn heat on medium and fry folded tortilla for 5 minutes each side', recipe_id: 2 }
  ]);
};
