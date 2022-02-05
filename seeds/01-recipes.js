/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'French Dip'},
    {recipe_name: 'Spaghetti'}
  ])
};
