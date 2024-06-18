async function peanutButterAndJelly(knex) {
  await knex("recipes").insert({
    recipe_name: "Peanut Butter and Jelly",
  });
  await knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "Spread peanut butter on one slice of bread",
      recipe_id: 1,
    },
    {
      step_number: 2,
      step_instructions: "Spread jelly on the other slice of bread",
      recipe_id: 1,
    },
    {
      step_number: 3,
      step_instructions: "Put the two slices of bread together",
      recipe_id: 1,
    },
  ]);
  await knex("ingredients").insert([
    { ingredient_name: "peanut butter" },
    { ingredient_name: "jelly" },
    { ingredient_name: "bread" },
  ]);
  await knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1 },
    { recipe_id: 1, ingredient_id: 2, quantity: 1 },
    { recipe_id: 1, ingredient_id: 3, quantity: 2 },
  ]);
}

async function spaghetti(knex) {
  await knex("recipes").insert({
    recipe_name: "Spaghetti",
  });
  await knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "Boil water",
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions: "Add spaghetti noodles to boiling water",
      recipe_id: 2,
    },
    {
      step_number: 3,
      step_instructions: "Cook spaghetti noodles for 10 minutes",
      recipe_id: 2,
    },
    {
      step_number: 4,
      step_instructions: "Drain spaghetti noodles",
      recipe_id: 2,
    },
    {
      step_number: 5,
      step_instructions: "Add spaghetti sauce to noodles",
      recipe_id: 2,
    },
  ]);
  await knex("ingredients").insert([
    { ingredient_name: "spaghetti noodles" },
    { ingredient_name: "spaghetti sauce" },
  ]);
  await knex("recipe_ingredients").insert([
    { recipe_id: 2, ingredient_id: 4, quantity: 1 },
    { recipe_id: 2, ingredient_id: 5, quantity: 1 },
  ]);
}

async function water(knex) {
  await knex("recipes").insert({
    recipe_name: "Water",
  });
  await knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "Fill glass with water",
      recipe_id: 3,
    },
  ]);
  await knex("ingredients").insert([{ ingredient_name: "water" }]);
  await knex("recipe_ingredients").insert([
    { recipe_id: 3, ingredient_id: 6, quantity: 1 },
  ]);
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe_ingredients").truncate();
  await knex("ingredients").truncate();
  await knex("steps").truncate();
  await knex("recipes").truncate();

  await peanutButterAndJelly(knex);
  await spaghetti(knex);
  await water(knex);
};
