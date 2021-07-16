exports.seed = function (knex, Promise) {
  return knex("recipe_ingredients").insert([
    { ingredient_id: 1, recipe_id: 1, ingredient_quantity: "2 cups" },
    { ingredient_id: 2, recipe_id: 1, ingredient_quantity: "1 cup" },
    { ingredient_id: 3, recipe_id: 1, ingredient_quantity: "1 packet" },
    { ingredient_id: 4, recipe_id: 1, ingredient_quantity: "1 egg" },
    { ingredient_id: 5, recipe_id: 3, ingredient_quantity: "1 bagel" },
    { ingredient_id: 6, recipe_id: 3, ingredient_quantity: "Enough to cover the bagel" },
    { ingredient_id: 7, recipe_id: 3, ingredient_quantity: "a pinch" },
  ]);
};
