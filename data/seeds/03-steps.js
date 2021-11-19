
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 2, ingredient_id: 1, quantity: .5, measurement: 'cups'},
        {step_id: 3, ingredient_id: 2, quantity: 1.75, measurement: 'cups'},
        {step_id: 2, ingredient_id: 3, quantity: .75, measurement: 'cups'},
        {step_id: 3, ingredient_id: 4, quantity: 1, measurement: 'large'},
        {step_id: 4, ingredient_id: 5, quantity: 2, measurement: 'cups'},
      ]);
    });
};
