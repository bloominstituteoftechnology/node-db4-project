
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, instructions: 'Stir yeast and flour together', step_number: 1},
        {recipe_id: 1, instructions: 'add in water slowly and mix until dough forms', step_number: 2},
        {recipe_id: 1, instructions: 'let rise, form crust, top with cheese and pepperoni', step_number: 3},
        {recipe_id: 1, instructions: 'heat in oven at 400*F until edges are golden brown', step_number: 4},
        {recipe_id: 2, instructions: 'Add barely, water, and hops into giant pot', step_number: 1},
        {recipe_id: 2, instructions: 'Boil water for 20 mins', step_number: 2},
        {recipe_id: 2, instructions: 'Let cool, add yeast, put into airtight container.', step_number: 3},
        {recipe_id: 2, instructions: 'Wait two weeks, then drink!', step_number: 4},
      ]);
    });
};
