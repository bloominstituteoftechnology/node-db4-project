/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del();
  await knex('ingredients').insert([
    { ingredient_name: 'Spaghetti' },
    { ingredient_name: 'Ground Beef' },
    { ingredient_name: 'Chicken Breast' },
    { ingredient_name: 'Curry Powder' }
  ]);
};