const steps = [
  { 
    step_number: 1,
    instructions: 'Cut chicken on cutting board',
    recipe_id: 1 },
  { 
    step_number: 2,
    instructions: 'Wrap chicken in lettuce leaves',
    recipe_id: 1 
  },
  { 
    step_number: 1,
    instructions: 'Place apple onto crust to make an uncooked pie'
    ,
    recipe_id: 2 },
  { 
    step_number: 2,
    instructions: 'Place the uncooked pie into the oven',
    recipe_id: 2 
  },
]
exports.steps = steps

exports.seed = function(knex) {
  return knex('steps').insert(steps)
}
