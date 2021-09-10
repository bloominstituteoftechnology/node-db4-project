
exports.seed = function(knex) {
  return knex('steps').insert([
      {step_name: 'Prep', step_instructions: 'Put a large saucepan on a medium heat', step_number: 1, recipe_id: 1 },
      {step_name: 'Prep', step_instructions: 'Add 1 tbsp olive oil', step_number: 2, recipe_id: 1 },
    ]);
};
