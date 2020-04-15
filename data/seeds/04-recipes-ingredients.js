exports.seed = function (knex) {
  return knex("recipes_ingredients").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      unit: "Slice",
      ingredient_quantity: 2.0,
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      unit: "Slice",
      ingredient_quantity: 2.0,
    },
    {
      recipe_id: 1,
      ingredient_id: 3,
      unit: "TBSP",
      ingredient_quantity: 2.0,
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      unit: "Slice",
      ingredient_quantity: 6.0,
    },
    {
      recipe_id: 2,
      ingredient_id: 5,
      unit: "Egg",
      ingredient_quantity: 3.0,
    },
  ]);
};
