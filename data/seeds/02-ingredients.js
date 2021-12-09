exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'olive oil', ingredient_unit: '1lbs' },
  ]);
};
