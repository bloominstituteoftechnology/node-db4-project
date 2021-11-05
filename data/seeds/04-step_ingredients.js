exports.seed = function (knex, Promise) {
  return knex("step_ingredients").insert([
    { step_id: 1, ingredient_id: 1, quantity: 120 },
    { step_id: 2, ingredient_id: 2, quantity: 1 },
    { step_id: 3, ingredient_id: 3, quantity: 2.1 },
    { step_id: 4, ingredient_id: 4, quantity: 1.9 },
    { step_id: 5, ingredient_id: 5, quantity: 1.9 },
    { step_id: 6, ingredient_id: 6, quantity: 1.9 },
  ]);
};
