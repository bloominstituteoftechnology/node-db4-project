exports.seed = function (knex) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, amount: "2 pounds" },
    { recipe_id: 1, ingredient_id: 2, amount: "2 cups" },
    { recipe_id: 1, ingredient_id: 3, amount: "15 pounds" },
  ]);
};
