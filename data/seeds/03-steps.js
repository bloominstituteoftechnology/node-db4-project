const steps = [
  { step_id: 2, step_number: 1, instructions: "take bread", recipe_id: 1 },
  {
    step_id: 1,
    step_number: 2,
    instructions: "put peanut butter on one bread",
    recipe_id: 1,
  },
  {
    step_id: 3,
    step_number: 3,
    instructions: "put jelly on other bread",
    recipe_id: 1,
  },
];

exports.steps = steps;

exports.seed = function (knex) {
  return knex("steps").insert(steps);
};
