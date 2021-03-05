
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_id: 1, step_number: 1, recipe_id: 2, ingredient_id: 1, quantity: 1, action: "Put it in a bowl"},
        {step_id: 2, step_number: 2, recipe_id: 2, ingredient_id: 2, quantity: 2, action: "Squeeze into the ice cream"},
        {step_id: 3, step_number: 1, recipe_id: 3, ingredient_id: 3, quantity: .25, action: "Pour into an empty bowl"},
        {step_id: 4, step_number: 2, recipe_id: 3, ingredient_id: 4, quantity: 1, action: "Pour onto cereal"},
      ]);
    });
};
