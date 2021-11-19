
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: 'preheat oven to 350 degrees Fahrenheit'},
        {recipe_id: 1, step_number: 2, instructions: 'Mix butter & sugar well'},
        {recipe_id: 1, step_number: 3, instructions: 'Add eggs & flour; stir into a soft dough'},
        {recipe_id: 1, step_number: 4, instructions: 'mix in chocolate chips'},
        {recipe_id: 1, step_number: 5, instructions: 'make dough into balls and onto baking sheet - spaced apart'},
        {recipe_id: 1, step_number: 6, instructions: 'bake for 10 - 12 minutes'},
      ]);
    });
};
