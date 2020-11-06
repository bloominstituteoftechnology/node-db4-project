exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: "1 slice" },
        { recipe_id: 1, ingredient_id: 2, quantity: "2 slices" },
        { recipe_id: 1, ingredient_id: 3, quantity: "2 tbsp" },
        { recipe_id: 2, ingredient_id: 3, quantity: "1/2 stick" },
        { recipe_id: 2, ingredient_id: 4, quantity: "1 box" },
        { recipe_id: 2, ingredient_id: 5, quantity: "1 jar" },
        { recipe_id: 2, ingredient_id: 6, quantity: "1 pound" },
      ]);
    });
};
