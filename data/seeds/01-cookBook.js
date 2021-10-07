

exports.seed = async function (knex) {
  await knex("recipes").insert([
    {
      recipe_name: "recipe_1",
    },
    {
      recipe_name: "Spaghetti",
    },
  ]);
  await knex("ingredients").insert([
    {
      ingredient_name: "ingredient_1",
      ingredient_unit: "lbs",
    },
    {
      ingredient_name: "ingredient_2",
      ingredient_unit: "grams",
    },
    {
      ingredient_name: "ingredient_3",
      ingredient_unit: "oz",
    },
    {
      ingredient_name: "ingredient_4",
      ingredient_unit: "tsp",
    },
    {
      ingredient_name: "spaghetti",
      ingredient_unit: "lbs",
    },
    {
      ingredient_name: "Pasta sauce",
      ingredient_unit: "pint",
    },
  ]);
  await knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "instructions-a1",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "instructions-a2",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "instructions-a3",
      recipe_id: 1,
    },
    {
      step_number: 4,
      step_instructions: "instructions-a4",
      recipe_id: 1,
    },
    {
      step_number: 1,
      step_instructions: "Boil water",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions: "Add spaghetti",
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_instructions: "Drain then add sauce",
      recipe_id: 2,
    },
  ]);
  await knex("step_ingredients").insert([
    {
      step_id: 1,
      ingredient_id: 1,
      amount: 1,
    },
    {
      step_id: 2,
      ingredient_id: 2,
      amount: 2,
    },
    {
      step_id: 3,
      ingredient_id: 3,
      amount: 3,
    },
    {
      step_id: 4,
      ingredient_id: 4,
      amount: 1.5,
    },
    {
      step_id: 6,
      ingredient_id: 5,
      amount: 2,
    },
    {
      step_id: 7,
      ingredient_id: 6,
      amount: 1,
    },
  ]);
};
