const steps_ingredients = [   
  { step_id: 8, ingredient_id: 1, quantity_oz: 1 },
  { step_id: 2, ingredient_id: 2, quantity_oz: 8 },
  { step_id: 10, ingredient_id: 3, quantity_oz: 3 },
  { step_id: 5, ingredient_id: 4, quantity_oz: 2 },
  { step_id: 6, ingredient_id: 5, quantity_oz: 2 },
  { step_id: 8, ingredient_id: 6, quantity_oz: 5 },
  { step_id: 11, ingredient_id: 7, quantity_oz: 2 },
  { step_id: 12, ingredient_id: 8, quantity_oz: 1 }
]

exports.seed = function(knex) {
  return knex('steps_ingredients').insert(steps_ingredients);
};
