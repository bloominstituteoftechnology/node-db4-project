const steps = [
  { step_number: 1, instruction: "Mayo the bread", recipe_id: 1 },
  { step_number: 2, instruction: "Add Bacon", recipe_id: 1 },
  {step_number: 3, instruction: "Add Tomato", recipe_id: 1 },
  {step_number: 4, instruction: "Add Lettuce", recipe_id: 1 },
  {step_number: 1, instruction: "Peanut butter the bread", recipe_id: 2 }
];


exports.seed = knex => {
    return knex('steps').del()
    .then(() => {
        return knex('steps').insert(steps)
    })
}