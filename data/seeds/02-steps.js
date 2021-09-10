
exports.seed = function(knex) {
  return knex('steps').insert([
      {step_name: 'Get ingredients', step_instructions: 'Please go get the ingredients', step_number: 1, recipe_id: 1 },
    ]);
};
