
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        { id: 1, recipe_id: 1, step_direction: 'blah blah', step_count: 0 },
        { id: 2, recipe_id: 1, step_direction: 'blah blah2', step_count: 1 },

        // recipe_id 2,
      ]);
    });
};
