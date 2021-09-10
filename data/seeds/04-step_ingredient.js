
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
      {quantity: 4.00, ingredient_id: 1, step_id: 1},
    ]);
};
