const steps = [
  { step_number: 1, instructions: "Put milk in bowl", recipe_id: 1 },
  { step_number: 2, instructions: "Put cereal in bowl", recipe_id: 1 },
  {
    step_number: 1,
    instructions: "Heat a small pot on the stove-top, add milk",
    recipe_id: 2,
  },
  {
    step_number: 2,
    instructions: "Place oats into small pot and cook for 10 minutes",
    recipe_id: 2,
  },
  {
    step_number: 3,
    instructions: "Transfer the oatmeal to a bowl",
    recipe_id: 2,
  },
  {
    step_number: 1,
    instructions: "Preheat the toaster oven to 350 degrees",
    recipe_id: 3,
  },
  {
    step_number: 2,
    instructions: "Place the bread in the oven, bake for 5-10 minutes",
    recipe_id: 3,
  },
  {
    step_number: 3,
    instructions: "add butter to the toast, enjoy!",
    recipe_id: 3,
  },
];

exports.steps = steps;

exports.seed = function (knex) {
  return knex("steps").insert(steps);
};
