exports.seed = function(knex) {
  return knex('amounts').truncate()
    .then(function() {
      return knex('amounts')
        .insert([
          { step_id: 1, ingredient_id: 6, amount: 2 },
          { step_id: 1, ingredient_id: 3, amount: 2 },
          { step_id: 4, ingredient_id: 8, amount: 1 },
          { step_id: 4, ingredient_id: 1, amount: 1 },
          { step_id: 5, ingredient_id: 7, amount: 4 },
          { step_id: 10, ingredient_id: 1, amount: 0.5 },
          { step_id: 10, ingredient_id: 5, amount: 1 },
          { step_id: 11, ingredient_id: 4, amount: 2 },
          { step_id: 13, ingredient_id: 2, amount: 2 },
        ]);
    });
};
