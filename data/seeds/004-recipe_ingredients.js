
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        {recipe_id: 1, ingredients_id: 1},
        {recipe_id: 1, ingredients_id: 2},
        {recipe_id: 1, ingredients_id: 3},
        {recipe_id: 1, ingredients_id: 4},
        {recipe_id: 2, ingredients_id: 1},
        {recipe_id: 2, ingredients_id: 2},
        {recipe_id: 2, ingredients_id: 3},
        {recipe_id: 3, ingredients_id: 1},
        {recipe_id: 3, ingredients_id: 2},
        {recipe_id: 3, ingredients_id: 3}
      ]);
    });
};
