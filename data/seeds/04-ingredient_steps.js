const ingredient_steps = [
  { step_id: 1, ingredient_id: 1, quantity: 1 },
  { step_id: 2, ingredient_id: 2, quantity: 3 },
  { step_id: 3, ingredient_id: 3, quantity: 1 },
  { step_id: 4, ingredient_id: 4, quantity: 2 },
  { step_id: 5, ingredient_id: 5, quantity: 2 }
];

exports.seed = (knex) => {
  return knex("ingredient_steps")
    .del()
    .then(() => {
      return knex("ingredient_steps").insert(ingredient_steps);
    });
};
