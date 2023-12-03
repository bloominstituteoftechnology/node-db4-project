/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del();
  await knex('recipes').insert([
    { recipe_name: 'Spaghetti Bolognese', created_at: new Date() },
    { recipe_name: 'Chicken Curry', created_at: new Date() }
  ]);
};
