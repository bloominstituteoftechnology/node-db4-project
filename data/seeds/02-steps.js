exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    {recipe_id: 1, step_number: 1, step_instructions: 'boil potatoes'},
    {recipe_id: 1, step_number: 2, step_instructions: 'cover in cheese'},
    {recipe_id: 2, step_number: 1, step_instructions: 'catch chicken'},
    {recipe_id: 2, step_number: 2, step_instructions: 'kill chicken'},
    {recipe_id: 2, step_number: 3, step_instructions: 'cook chicken'},
    {recipe_id: 3, step_number: 1, step_instructions: 'slice onions'},
    {recipe_id: 3, step_number: 2, step_instructions: 'fry onions'},
  ]);
};
