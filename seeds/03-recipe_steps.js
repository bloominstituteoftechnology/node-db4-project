/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('recipe_steps').insert([
    {step_number: 1, step_instructions: 'Toast bread', recipe_id: 1},
    {step_number: 2, step_instructions: 'Roast meant and let sit in au jus', recipe_id: 1},
    {step_number: 3, step_instructions: 'Please meat on toasted bread', recipe_id: 1},
    {step_number: 4, step_instructions: 'Add cheese to taste', recipe_id: 1},
    {step_number: 1, step_instructions: 'Boile water', recipe_id: 1},
    {step_number: 2, step_instructions: 'Add pasta to water and cook to aldiente. Drain.', recipe_id: 1},
    {step_number: 3, step_instructions: 'Add pasta to marinara sauce, let simmer', recipe_id: 1},
    {step_number: 4, step_instructions: 'Plate pasta and add cheese to taste.', recipe_id: 1}
  ])
};
