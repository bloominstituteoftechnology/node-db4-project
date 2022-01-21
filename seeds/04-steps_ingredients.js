
exports.seed = function(knex, Promise) {
    return knex('steps_ingredients').insert([
      { step_id: 1, ingredient_id: 1 ,quantity: 1},
      { step_id: 2, ingredient_id: 2 ,quantity: 0.25},
      { step_id: 2, ingredient_id: 3 ,quantity: 0.25},
      { step_id: 2, ingredient_id: 4 ,quantity: 0.5},
      { step_id: 2, ingredient_id: 5 ,quantity: 4},
      { step_id: 2, ingredient_id: 6 ,quantity: 0.5},
      { step_id: 3, ingredient_id: 7 ,quantity: 1},
      { step_id: 5, ingredient_id: 8 ,quantity: 1},
      { step_id: 5, ingredient_id: 9 ,quantity: 1},
      { step_id: 5, ingredient_id: 10 ,quantity: 1},
      { step_id: 5, ingredient_id: 11 ,quantity: 0.5},
      { step_id: 5, ingredient_id: 12 ,quantity: 1 },
      { step_id: 6, ingredient_id: 13 ,quantity: 0.5},
      { step_id: 6, ingredient_id: 14 ,quantity: 1},
      { step_id: 7, ingredient_id: 15 ,quantity: 0.5},
      { step_id: 7, ingredient_id: 16 ,quantity: 6},
    ]);
  };