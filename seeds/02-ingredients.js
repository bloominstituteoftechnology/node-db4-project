/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'Olive Oil', measurement_unit: 'tbsp'},
    {ingredient_name: 'Chuck Roast', measurement_unit: 'lbs'},
    {ingredient_name: 'Bread', measurement_unit: 'slices'},
    {ingredient_name: 'Cheese', measurement_unit: 'slices'},
    {ingredient_name: 'Pasta', measurement_unit: 'ounces'},
    {ingredient_name: 'Water', measurement_unit: 'cups'},
    {ingredient_name: 'Marinara Sauce', measurement_unit: 'ounces'}
  ])
};
