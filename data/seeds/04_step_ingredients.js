exports.seed = function (knex) {
  return knex("step_ingredients").insert([
    {
      ingredient_id: 2,
      step_id: 3,
    },
    {
      ingredient_id: 1,
      step_id: 2,
    },
  ]);
};
