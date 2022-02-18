exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipes").truncate();
  await knex("recipes").insert([
    { recipe_name: "mashed potatoes" },
    { recipe_name: "texas sheet cake" },
    { recipe_name: "carne asada tacos" },
  ]);
  await knex("steps").truncate();
  await knex("steps").insert([
    { step_number: 1, step_instructions: "bake at 350 degrees for 20 minutes" },
    { step_number: 2, step_instructions: "bake at 375 degrees for 30 minutes" },
    { step_number: 3, step_instructions: "bake at 400 degrees for 40 minutes" },
  ]);
  await knex("ingredients").truncate();
  await knex("ingredients").insert([
    {
      ingredients_name: "potatos",
      step_id: "bake at 350 degrees for 20 minutes",
    },
    {
      ingredients_name: "cocoa",
      step_id: "bake at 375 degrees for 30 minutes",
    },
    {
      ingredients_name: "steak",
      step_id: "bake at 400 degrees for 40 minutes",
    },
  ]);
};
