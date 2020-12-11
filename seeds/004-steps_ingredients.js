
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps_ingredients').insert([
        {ingredient_id: 1, quantity: '8oz', step_id: 1},
        {ingredient_id: 2, quantity: '2 Tbls', step_id: 1},
        {ingredient_id: 3, quantity: '2 Slices', step_id: 3},
        {ingredient_id: 4, quantity: '2 Slices', step_id: 4},
        {ingredient_id: 5, quantity: '1 tsp', step_id: 3}
      ]);
    });
};
