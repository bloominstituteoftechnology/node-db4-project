exports.seed = function(knex, Promise) {
    return knex('step-ingredients').insert([
      { ingredient_id: 1, step_id: 2, quantity: 1 }, // water
      { ingredient_id: 2, step_id: 2, quantity: 1 }, // salt
      { ingredient_id: 3, step_id: 3, quantity: 2 } // egg
    ]);
  };