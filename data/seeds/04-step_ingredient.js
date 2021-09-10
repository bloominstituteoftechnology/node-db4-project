
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
      {quantity: 0.014, ingredient_id: 1, step_id: 2},
    ]);
};
