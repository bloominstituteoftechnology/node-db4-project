const recipes = [
  { recipe_name: "Broccoli Pesto Pasta" },
  { recipe_name: "Lemon Chicken" },
  { recipe_name: "Salmon en Papillote" },
];

const ingredients = [
  { ingredient_name: "Broccoli", ingredient_unit: "lbs" },
  { ingredient_name: "Pesto", ingredient_unit: "lbs" },
  { ingredient_name: "Pasta", ingredient_unit: "lbs" },
  { ingredient_name: "Lemon", ingredient_unit: "slices" },
  { ingredient_name: "Chicken", ingredient_unit: "kilos" },
  { ingredient_name: "Salmon", ingredient_unit: "grams " },
];

const steps_ingredients = [
  // Broccoli Pesto Pasta
  { step_id: 2, ingredient_id: 1, quantity: 1 },
  { step_id: 3, ingredient_id: 2, quantity: 1.5 },
  { step_id: 3, ingredient_id: 3, quantity: 2 },

  // Lemon Chicken
  { step_id: 5, ingredient_id: 4, quantity: 1 },
  { step_id: 5, ingredient_id: 5, quantity: 0.4 },
  // Salmon en Papillote
  { step_id: 7, ingredient_id: 6, quantity: 1 },
];

const steps = [
  // Broccoli Pesto Pasta
  { step_instructions: "Heat pan", step_number: 1, recipe_id: 1 },
  { step_instructions: "Add broccoli", step_number: 2, recipe_id: 1 },
  {
    step_instructions: "Add pesto mixed with pasta",
    step_number: 3,
    recipe_id: 1,
  },
  // Lemon Chicken
  { step_instructions: "Heat oven", step_number: 1, recipe_id: 2 },
  {
    step_instructions: "Put chicken and lemon in oven",
    step_number: 2,
    recipe_id: 2,
  },
  {
    step_instructions: "Put in oven at 500 degrees",
    step_number: 3,
    recipe_id: 2,
  },
  // Salmon en Papillote
  {
    step_instructions: "Fish a salmon in the Bidasoa River",
    step_number: 1,
    recipe_id: 3,
  },
  { step_instructions: "Cook salmon", step_number: 2, recipe_id: 3 },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("steps_ingredients").insert(steps_ingredients);
};
