exports.seed = function (knex) {
  return knex("recipes_ingredients")
    .truncate()
    .then(function () {
      return knex("recipes_ingredients").insert([
        { quantity: "two eggs", recipes_id: 1, ingredients_id: 1 },
        { quantity: "olive oil", recipes_id: 1, ingredients_id: 1 },
        {
          quantity: "two stripes of bacon",
          recipes_id: 2,
          ingredients_id: 2,
        },
      ]);
    });
};
