exports.seed = function (knex) {
  return knex("step_ingredients")
    .truncate()
    .then(function () {
      return knex("step_ingredients").insert([
        {
          step_id: 1,
          ingredient_id: 1,
          quantity: 4,
        },
        {
          step_id: 2,
          ingredient_id: 2,
          quantity: 8,
        },
        {
          step_id: 3,
          ingredient_id: 3,
          quantity: 3.5,
        },
        {
          step_id: 1,
          ingredient_id: 4,
          quantity: 1,
        },
        {
          step_id: 2,
          ingredient_id: 5,
          quantity: 8,
        },
        {
          step_id: 3,
          ingredient_id: 5,
          quantity: 8,
        },
        {
          step_id: 5,
          ingredient_id: 6,
          quantity: 20,
        },
      ]);
    });
};
