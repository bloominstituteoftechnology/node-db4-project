exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { id: 1, step_number: 1, recipe_id: 1, instructions: 'Boil water' },
    { id: 2, step_number: 2, recipe_id: 1, instructions: 'Add pasta' },
    { id: 3, step_number: 3, recipe_id: 1, instructions: 'Cook pasta' },
    { id: 4, step_number: 1, recipe_id: 2, instructions: 'Prepare sauce' },
    { id: 5, step_number: 2, recipe_id: 2, instructions: 'Put lasagne in oven' },
    { id: 6, step_number: 1, recipe_id: 3, instructions: 'Roast meat' },
    { id: 7, step_number: 2, recipe_id: 3, instructions: 'Broil meat' }
  ])
}

