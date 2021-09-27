exports.seed = function(knex) {
    return knex('step_ingredients').truncate()
      .then(function () {
        return knex('step_ingredients').insert([
          {step_id: 2, ingredient_id: 1, quantity: .5, measurement: 'cups'},
          {step_id: 3, ingredient_id: 2, quantity: 1.75, measurement: 'cups'},
          {step_id: 2, ingredient_id: 3, quantity: .75, measurement: 'cups'},
          {step_id: 3, ingredient_id: 4, quantity: 1, measurement: 'large'},
          {step_id: 4, ingredient_id: 5, quantity: 2, measurement: 'cups'},
        ]);
      });
  };
