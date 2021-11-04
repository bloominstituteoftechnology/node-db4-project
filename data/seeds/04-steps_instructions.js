exports.seed = function (knex) {
  return knex("steps_instructions").insert([
    // Brocoli pesto Pasta
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 2 },
    // Lemon chicken
    { step_id: 5, ingredient_id: 4, quantity: 1 },
    { step_id: 5, ingredient_id: 5, quantity: 0.4 },
    // Salmon en Papillote
    { step_id: 7, ingredient_id: 6, quantity: 1 },
  ]);
};
