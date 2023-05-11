/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").insert([
    { ingredient_name: "olive oil", quantity: 4, recipe_id: 1, step_id: 2 }, 
    { ingredient_name: "water", quantity: 1, recipe_id: 1, step_id: 1 },
    { ingredient_name: "water", quantity: 0.014, recipe_id: 1, step_id: 3 },
    { ingredient_name: "olive oil", quantity: 3, recipe_id: 1, step_id: 1 },
  ]);
};

