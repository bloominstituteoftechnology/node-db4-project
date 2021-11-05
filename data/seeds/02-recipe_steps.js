
exports.seed = function (knex) {
  return knex('recipe_steps').insert([
    {
      step_num: 1,
      step_instructions: 'something 1',
      recipe_id: 1,
    },
    {
      step_num: 2,
      step_instructions: 'something 2',
      recipe_id: 1,
    },
    {
      step_num: 3,
      step_instructions: 'something 3',
      recipe_id: 1,
    },
    {
      step_num: 1,
      step_instructions: 'thing 1',
      recipe_id: 2,
    },
    {
      step_num: 2,
      step_instructions: 'thing 2',
      recipe_id: 2,
    },
  ])
}

