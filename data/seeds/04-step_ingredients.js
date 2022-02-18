exports.seed = function(knex, Promise) {     
  return knex('step_ingredients').insert([
    {step_id: 11, ingredient_id: 1}                 
  ]);      
};          