
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {step_ingredient_id: 1, step_id: 1, ingredient_id: 2},
        {step_ingredient_id: 2, step_id: 2, ingredient_id: 1},
        {step_ingredient_id: 3, step_id: 1, ingredient_id: 1}
      ]);
    });
};
