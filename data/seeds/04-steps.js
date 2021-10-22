const steps = [
  { instructions: 'take jelly', recipe_id: 1, step_number: 1, measurement_id: 3, ingredient_id: 2 },
  { instructions: 'take peanut butter', recipe_id: 1, step_number: 2, measurement_id: 3, ingredient_id: 1 },
  { instructions: 'take bread', recipe_id: 1, step_number: 3, measurement_id: 3, ingredient_id: 3 },
  { instructions: 'make sandwhich', recipe_id: 1, step_number: 4, measurement_id: 3, ingredient_id: 3}
]

exports.steps = steps

exports.seed = function (knex) {
  return knex('steps').insert(steps)
}