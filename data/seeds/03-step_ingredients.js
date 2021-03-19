exports.seed = function(knex) {
  return knex('steps').truncate()
  .then(function () {
    return knex('step_ingredients').insert([   
      { step_id: 1, quantity: 0 },
      { step_id: 2, quantity: 1 },
      { step_id: 3, quantity: 2 },
      { step_id: 4, quantity: 1 },
      { step_id: 5, quantity: 1 },
    ]);
  });
};