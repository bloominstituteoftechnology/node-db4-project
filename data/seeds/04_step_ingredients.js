
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {step_ingredient_id: 1, ingredient_id: 1, quantity: 5, step_id: 1},
        {step_ingredient_id: 2, ingredient_id: 3, quantity: 3, step_id: 1},
        {step_ingredient_id: 3, ingredient_id: 1, quantity: 8, step_id: 2},
        {step_ingredient_id: 4, ingredient_id: 2, quantity: 9, step_id: 2}
      ]);
    });
};
