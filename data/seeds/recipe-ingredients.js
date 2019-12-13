exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 5, quantity: "1 egg" },
        { recipe_id: 1, ingredient_id: 6, quantity: "1/4 cup" },
        { recipe_id: 2, ingredient_id: 1, quantity: "2 table spoons" },
        { recipe_id: 2, ingredient_id: 2, quantity: "2 table spoons" },
        { recipe_id: 2, ingredient_id: 3, quantity: "2 slices" },
        { recipe_id: 3, ingredient_id: 4, quantity: "1 bag" }
      ]);
    });
};
