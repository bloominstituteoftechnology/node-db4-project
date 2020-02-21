exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1 },
        { recipe_id: 1, ingredient_id: 2 },
        { recipe_id: 1, ingredient_id: 3 }
      ]);
    });
};
