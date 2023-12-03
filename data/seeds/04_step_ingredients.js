/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').del()
  await knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 1, quantity: 100}, // e.g., 100g of ingredient 1 used in step 1
    {step_id: 1, ingredient_id: 2, quantity: 50},  // e.g., 50g of ingredient 2 used in step 1
    {step_id: 2, ingredient_id: 3, quantity: 5}   // e.g., 5ml of ingredient 3 used in step 2
  ]);
};
