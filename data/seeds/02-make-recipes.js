const recipes = [
  {
    recipe_name: `It's a Spicy-a, Meat-a-ball-a!`,
    created_at: new Date().toUTCString(),
  },
  {
    recipe_name: "Roasted Rosemary Cauliflower",
    created_at: new Date().toUTCString(),
  },
  {
    recipe_name: "Grilled Teriyaki Salmon",
    created_at: new Date().toUTCString(),
  },
];

const ingredients = [
  { ingredient_name: "Angus Beef Meatballs", ingredient_unit: "oz" },
  { ingredient_name: "Chili sauce", ingredient_unit: "oz" },
  { ingredient_name: "Grape Jelly", ingredient_unit: "oz" },
  { ingredient_name: "Cauliflower", ingredient_unit: "lbs" },
  { ingredient_name: "Olive Oil", ingredient_unit: "tbsp" },
  { ingredient_name: "Fresh Rosemary", ingredient_unit: "tsp" },
  { ingredient_name: "Salt", ingredient_unit: "tsp" },
  { ingredient_name: "Teriyaki Sauce", ingredient_unit: "cups" },
  { ingredient_name: "Maple Syrup", ingredient_unit: "cup" },
  { ingredient_name: "Salmon fillets", ingredient_unit: "oz" },
];

const step_ingredients = [
  // Chili and Jelly Meatballs
  { step_id: 1, ingredient_id: 1, quantity: 44 },
  { step_id: 2, ingredient_id: 2, quantity: 12 },
  { step_id: 2, ingredient_id: 3, quantity: 10 },
  { step_id: 3, ingredient_id: 1, quantity: 44 },
  // Roasted Rosemary Cauliflower
  { step_id: 5, ingredient_id: 4, quantity: 2.5 },
  { step_id: 5, ingredient_id: 5, quantity: 2 },
  { step_id: 5, ingredient_id: 6, quantity: 2 },
  { step_id: 5, ingredient_id: 7, quantity: 1 / 2 },
  // Grilled Teriyaki Salmon
  { step_id: 7, ingredient_id: 8, quantity: 3 / 4 },
  { step_id: 7, ingredient_id: 9, quantity: 1 / 2 },
  { step_id: 8, ingredient_id: 10, quantity: 6 },
];

const steps = [
  // Chili and Jelly Meatballs
  {
    step_number: 1,
    step_instructions: "Prepare meatballs according to package instructions.",
    recipe_id: 1,
  },
  {
    step_number: 2,
    step_instructions:
      "In a large skillet, combine chili sauce and jelly; cook and stir over medium heat until jelly has" +
      " melted.",
    recipe_id: 1,
  },
  {
    step_number: 3,
    step_instructions: "Add meatballs to pan; heat through.",
    recipe_id: 1,
  },
  // Roasted Rosemary Cauliflower
  { step_number: 1, step_instructions: "Preheat oven to 450°.", recipe_id: 2 },
  {
    step_number: 2,
    step_instructions:
      "Toss together all ingredients; spread in a greased 15x10x1-in. pan.",
    recipe_id: 2,
  },
  {
    step_number: 3,
    step_instructions:
      "Roast until tender and lightly browned, 20-25 minutes, stirring occasionally.",
    recipe_id: 2,
  },
  // Grilled Teriyaki Salmon
  {
    step_number: 1,
    step_instructions:
      "In a small bowl, whisk teriyaki sauce and syrup. Pour 1 cup marinade into a large resealable" +
      " plastic bag. Add salmon; seal bag and turn to coat. Refrigerate 15 minutes. Cover and refrigerate" +
      " remaining marinade.",
    recipe_id: 3,
  },
  {
    step_number: 2,
    step_instructions:
      "Drain salmon, discarding marinade in bag. Moisten a paper towel with cooking oil; using" +
      " long-handled tongs, rub on grill rack to coat lightly.",
    recipe_id: 3,
  },
  {
    step_number: 3,
    step_instructions:
      "Place salmon on grill rack, skin side down. Grill, covered, over medium heat or broil 4 in. from" +
      " heat 8-12 minutes or until fish just begins to flake easily with a fork, basting frequently with reserved marinade. If desired, serve over lettuce salad.",
    recipe_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
