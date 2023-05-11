/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("steps").insert([
    {
      step_number: "1",
      step_instructions: "Put a large saucepan on a medium heat",
      recipe_id: 1,
    },
    {
      step_number: "2",
      step_instructions: "Add 1 tbsp olive oil",
      recipe_id: 1,
    },
    { step_number: "3", step_instructions: "Boil water", recipe_id: 1 },
    {
      step_number: "4",
      step_instructions: "Put Spaghetti noodles into boiling water",
      recipe_id: 1,
    },
    { step_number: "1", step_instructions: "Boil water", recipe_id: 2 },
  ]);
};

