/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
 return knex('step_ingredients').insert([
   {step_id: 1, ingredient_id: 3, ingredient_quantity: 2},
   {step_id: 2, ingredient_id: 1, ingredient_quantity: 0.5},
   {step_id: 3, ingredient_id: 2, ingredient_quantity: 1},
   {step_id: 4, ingredient_id: 5, ingredient_quantity: 32},
   {step_id: 5, ingredient_id: 4, ingredient_quantity: 1},
   {step_id: 6, ingredient_id: 6, ingredient_quantity: 2}
 ])
}; 
