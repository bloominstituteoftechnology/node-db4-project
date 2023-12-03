/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del();
  await knex('steps').insert([
    { recipe_id: 1, step_number: 1, step_instructions: 'Boil water for spaghetti' },
    { recipe_id: 1, step_number: 2, step_instructions: 'Cook spaghetti for 10 minutes' },
    { recipe_id: 2, step_number: 1, step_instructions: 'Dice the chicken' },
    { recipe_id: 2, step_number: 2, step_instructions: 'Cook chicken in a pan' }
  ]);
};