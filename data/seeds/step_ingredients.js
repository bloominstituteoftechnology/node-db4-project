
exports.seed = function(knex) {
  return knex('step_ingredients').del()
    .then(function () {
      return knex('step_ingredients').insert([
        {
          step_ingredient_id: 1, 
          step_id: 1,
          ingredient_id: 1,
          quantity: 1
        },
        {
          step_ingredient_id: 2, 
          step_id: 1,
          ingredient_id: 2,
          quantity: 1
        },
        {
          step_ingredient_id: 3, 
          step_id: 1,
          ingredient_id: 3,
          quantity: 1.003
        },
      ]);
    });
};
