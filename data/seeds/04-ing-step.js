const ing_step = [
  {step_id: 2, ing_id: 1, quantity: 16},
  {step_id: 2, ing_id: 2, quantity: 1},
  {step_id: 2, ing_id: 3, quantity: 1},
  {step_id: 2, ing_id: 4, quantity: 2},
  {step_id: 3, ing_id: 5, quantity: 2},
  {step_id: 3, ing_id: 6, quantity: 1},
  {step_id: 5, ing_id: 7, quantity: .25},
  {step_id: 5, ing_id: 8, quantity: .25},
  {step_id: 5, ing_id: 9, quantity: .25},
  {step_id: 5, ing_id: 10, quantity: .75},
  {step_id: 6, ing_id: 11, quantity: .75},
  {step_id: 8, ing_id: 12, quantity: 16},
  {step_id: 8, ing_id: 13, quantity: 1},
  {step_id: 8, ing_id: 14, quantity: 1},
  {step_id: 10, ing_id: 15, quantity: 2},
  {step_id: 10, ing_id: 16, quantity: 2},
]

exports.seed = function(knex) {
  return knex('ing_step').insert(ing_step);
};
