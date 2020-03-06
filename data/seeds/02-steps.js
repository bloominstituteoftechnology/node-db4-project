
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instruction: "Boil Pasta", recipe_id: 1},
        {id: 2, step_number: 2, instruction: "Add Sauce, Stir", recipe_id: 1},
        {id: 3, step_number: 3, instruction: "Add Parm, enjoy", recipe_id: 1},
        {id: 4, step_number: 1, instruction: "Toast Bread", recipe_id: 2},
        {id: 5, step_number: 2, instruction: "Spread Mayo and Mustard", recipe_id: 2},
        {id: 6, step_number: 3, instruction: "Put the Ham on it.", recipe_id: 2}
      ]);
    });
};
