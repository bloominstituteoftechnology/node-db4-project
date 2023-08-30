/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").truncate();
  await knex("recipes").insert([
    { recipe_name: "Simple Sweet Potato Fries" },
    { recipe_name: "Tomato and Onion Salad" },
  ]);
  await knex("ingredients").insert([
    { ingredient_name: "sweet potatoes" },
    { ingredient_name: "avocado oil" },
    { ingredient_name: "paprika" },
    { ingredient_name: "salt" },
    { ingredient_name: "pepper" },
  ]);
  await knex("steps").insert([
    {
      step_text:
        "Preheat your oven to 400 degrees fahrenheit and line a cookie sheet with parchment paper.",
      step_number: 1,
      recipe_id: 1,
    },
    {
      step_text:
        "Cut your sweet potatoes into wedges, and place them in a mixing bowl.",
      step_number: 2,
      recipe_id: 1,
    },
    {
      step_text: "Pour your avocado oil in and toss to coat.",
      step_number: 3,
      recipe_id: 1,
    },
    {
      step_text:
        "Next add your paprika, salt and pepper and toss to coat again.",
      step_number: 4,
      recipe_id: 1,
    },
    {
      step_text:
        "Place your fries on the parchment lined cookie sheet in an even layer.",
      step_number: 5,
      recipe_id: 1,
    },
    {
      step_text:
        "Bake for 15 minutes. Remove from the oven and toss the fries around.",
      step_number: 6,
      recipe_id: 1,
    },
    {
      step_text:
        "Place your fries back in the oven and continue baking for another 10-15 minutes until they reach your desired level of crispiness.",
      step_number: 7,
      recipe_id: 1,
    },
    {
      step_text:
        "Remove from the oven and serve! They're best while they're still warm.",
      step_number: 8,
      recipe_id: 1,
    },
  ]);
  await knex("step-ingredients").insert([
    { step_id: 2, ingredient_id: 1 },
    { step_id: 3, ingredient_id: 2 },
    { step_id: 4, ingredient_id: 3 },
    { step_id: 4, ingredient_id: 4 },
    { step_id: 4, ingredient_id: 5 },
  ]);
};
