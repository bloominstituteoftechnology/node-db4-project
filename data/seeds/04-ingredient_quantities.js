exports.seed = function(knex, Promise) {
  return knex('ingredient_quantities').insert([   
    {quantity: 0.4, step_id: 1, ingredient_id: 1},
    {quantity: 9, step_id: 2, ingredient_id: 2},
    {quantity: 5, step_id: 1, ingredient_id: 2}
  ]);
};