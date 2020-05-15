
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: '1', instructions: 'open the jar of olives', recipe_id: 3 },
        { step_number: '2', instructions: 'cut the cheese', recipe_id: 3 },
        { step_number: '1', instructions: 'place olives on board', recipe_id: 2 },
        { step_number: '2', instructions: 'place cheese on board', recipe_id: 2 },
        { step_number: '1', instructions: 'put the cheese on crackers', recipe_id: 1 },
        { step_number: '2', instructions: 'Apply the Ingredients', recipe_id: 1 },
        { step_number: '3', instructions: 'run to room of people', recipe_id: 1 },
        { step_number: '4', instructions: "Enjoy", recipe_id: 1 },
      ]);
    });
};
