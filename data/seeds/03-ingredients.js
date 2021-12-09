exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { step_id: 1 },
    { ingredient_name: 'olive oil', step_id: 2 },
  ]);
};
