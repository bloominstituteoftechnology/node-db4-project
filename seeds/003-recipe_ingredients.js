
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 5, quantity: 0 },
        { recipe_id: 2, ingredient_id: 7, quantity: 1 },
        { recipe_id: 3, ingredient_id: 6, quantity: 1 },



      ]);
    });
};
