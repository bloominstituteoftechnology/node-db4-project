exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, units: "cups", quantity: 8 },
        { recipe_id: 1, ingredient_id: 2, units: "cups", quantity: 2 },
        { recipe_id: 1, ingredient_id: 5, units: "cups", quantity: 1 }
      ]);
    });
};