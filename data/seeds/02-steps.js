
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 1, step_number: 1, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},
        {step_id: 2, step_number: 2, step_instructions: 'Add 1 tbsp olive oil', recipe_id: 1},       
      ]);
    });
};
