
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {step_id: 1, step_description: 'slather jelly on a slice of bread', step_number: 1, recipe_id: 1},
        {step_id: 2, step_description: 'spread peanutbutter on a slice of bread', step_number: 2, recipe_id: 1},
        {step_id: 3, step_description: 'put both slices together', step_number: 3, recipe_id: 1},
      ]);
    });
};
