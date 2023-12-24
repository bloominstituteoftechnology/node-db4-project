exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 1, quantity: 12},
    {step_id: 1, ingredient_id: 4, quantity: 2},
    {step_id: 2, ingredient_id: 2, quantity: 9},
    {step_id: 3, ingredient_id: 3, quantity: 1},
    {step_id: 5, ingredient_id: 4, quantity: 2},
    {step_id: 6, ingredient_id: 5, quantity: 6},
    {step_id: 7, ingredient_id: 4, quantity: 2},
  ]);
};
