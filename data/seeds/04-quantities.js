exports.seed = function(knex, Promise) {
    return knex('quantities').insert([
      { quantity: 2.0, ingredient_id: 1 },
      { quantity: 10.0, ingredient_id: 2 },
      { quantity: 1.000, ingredient_id: 3 },
      { quantity: 0.999, ingredient_id: 4 },
    ]);
};