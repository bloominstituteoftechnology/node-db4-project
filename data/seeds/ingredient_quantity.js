exports.seed = function (knex) {
  return knex("ingredient_quantity")
    .del()
    .then(function () {
      return knex("ingredient_quantity").insert([
        {
          quantity: 2,
          ingredients_id: 3,
          recipe_id: 2,
        },
        {
          quantity: 5,
          ingredients_id: 7,
          recipe_id: 3,
        },
        {
          quantity: 3,
          ingredients_id: 8,
          recipe_id: 6,
        },
      ]);
    });
};
