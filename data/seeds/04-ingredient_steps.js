exports.seed = function (knex) {
  return knex("ingredient_steps").insert([
    { ingredient_id: 1, step_id: 1, quantity: 1 },
    { ingredient_id: 2, step_id: 2, quantity: 1 },
    { ingredient_id: 3, step_id: 3, quantity: 1 },
  ]);
};
