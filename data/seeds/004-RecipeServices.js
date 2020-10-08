
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RecipeServices').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeServices').insert([
        {Ingredients_Id: 1, Recipe_Id: 2, Quantity: 1},
        {Ingredients_Id: 2, Recipe_Id: 3, Quantity: 2},
        {Ingredients_Id: 3, Recipe_Id: 1, Quantity: 2}
      ]);
    });
};
