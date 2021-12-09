exports.seed = function (knex, Promise) {
  return knex('step_ingredients').insert([
    { ingredient_id: 1, step_id: 2, quantity: 0.014 },
  ]);
};
