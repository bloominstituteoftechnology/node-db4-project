exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {step_number: 1, step_instruction: 'heat pan with medium flame', recipe_id: 1},
    {step_number: 2, step_instruction: 'add butter', recipe_id: 1},
    {step_number: 3, step_instruction: 'add eggs', recipe_id: 1},
    {step_number: 4, step_instruction: 'scramble eggs', recipe_id: 1},
    {step_number: 5, step_instruction: 'cook until fluffy', recipe_id: 1},
    {step_number: 6, step_instruction: 'get bread', recipe_id: 2},
    {step_number: 7, step_instruction: 'get peanut butter', recipe_id: 2},
    {step_number: 8, step_instruction: 'spread peanut butter on bread', recipe_id: 2},
    {step_number: 9, step_instruction: 'join pieces of bread together', recipe_id: 2},
    {step_number: 10, step_instruction: 'heat pan with medium flame', recipe_id: 3},
    {step_number: 11, step_instruction: 'add butter', recipe_id: 3},
    {step_number: 12, step_instruction: 'add bacon', recipe_id: 3},
    {step_number: 13, step_instruction: 'cook until crispy', recipe_id: 3}
  ]);
};
