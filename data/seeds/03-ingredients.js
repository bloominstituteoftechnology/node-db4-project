exports.seed = function(knex, Promise) {     
  return knex('ingredients').insert([
    {ingredient_name: 'olive oil', step_id: 12}                 
  ]);      
};    