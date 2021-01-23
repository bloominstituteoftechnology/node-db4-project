exports.seed = function (knex) {
  return knex("recipe_ingredients").insert([
    {
      recipe_id: 1,
      measurement_qty_id: 4,
      measurement_id: 3,
      ingredient_id: 1,
    },
    {
      recipe_id: 2,
      measurement_qty_id: 1,
      measurement_id: 5,
      ingredient_id: 2,
    },
    {
      recipe_id: 3,
      measurement_qty_id: 5,
      measurement_id: 2,
      ingredient_id: 3,
    },
  ]);
};
