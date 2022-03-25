const recipes = [
  { recipe_name: "toast" },
  { recipe_name: "cereal" },
  { recipe_name: "butter noodles" },
];

const ingredients = [
  { ingredient_name: "bread", ingredient_unit: "lbs" },
  { ingredient_name: "cap'n crunch", ingredient_unit: "lbs" },
  { ingredient_name: "milk", ingredient_unit: "pints" },
  { ingredient_name: "butter", ingredient_unit: "sticks" },
  { ingredient_name: "noodles", ingredient_unit: "lbs" },
];

const step_ingredients = [
  //toast
  { step_id: 3, ingredient_id: 1, quantity: 1 },
  { step_id: 6, ingredient_id: 4, quantity: 0.2 },
  // cereal
  { step_id: 2, ingredient_id: 2, quantity: 1 },
  { step_id: 3, ingredient_id: 3, quantity: 1 },
  { step_id: 4, ingredient_id: 3, quantity: 1 },
  // butter noodles
  { step_id: 1, ingredient_id: 4, quantity: 1 },
  { step_id: 1, ingredient_id: 5, quantity: 1 },
];

const steps = [
  // making toast

  { step_instructions: "locate toaster", step_number: 2, recipe_id: 1 },
  {
    step_instructions: "put bread in toaster",
    step_number: 3,
    recipe_id: 1,
  },
  {
    step_instructions: "wait for toasting to be accomplished",
    step_number: 4,
    recipe_id: 1,
  },
  {
    step_instructions: "remove toast",
    step_number: 5,
    recipe_id: 1,
  },
  {
    step_instructions: "spread butter",
    step_number: 6,
    recipe_id: 1,
  },
  // making cereal
  {
    step_instructions: "find bowl",
    step_number: 1,
    recipe_id: 2,
  },
  {
    step_instructions: "find milk",
    step_number: 2,
    recipe_id: 2,
  },
  {
    step_instructions: "pour cereal into bowl",
    step_number: 3,
    recipe_id: 2,
  },
  {
    step_instructions: "pour milk into bowl",
    step_number: 4,
    recipe_id: 2,
  },
  {
    step_instructions: "enjoy!",
    step_number: 5,
    recipe_id: 2,
  },
  // making butter noodles
  {
    step_instructions: "butter",
    step_number: 1,
    recipe_id: 3,
  },
  {
    step_instructions: "noodles",
    step_number: 2,
    recipe_id: 3,
  },
];
exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
