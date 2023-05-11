/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    { recipe_name: "Speghetti Bolognese" },
    { recipe_name: "Rice" },
    { recipe_name: "Sandwich" },
  ]);
};

