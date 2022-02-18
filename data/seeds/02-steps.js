exports.seed = function(knex, Promise) {     
  return knex('steps').insert([
    {step_number: 11, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 12, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 3, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                
    {step_number: 4, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 5, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 6, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 7, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 8, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 9, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 10, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 1, step_instructions: 'Put a large saucepan on a medium heat', recipe_id: 1},                 
    {step_number: 2, step_instructions: 'Add 1 tbsp olive oil', recipe_id: 1}                 
  ]);      
};