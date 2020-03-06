
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: "1 box"},
        {recipe_id: 1, ingredient_id: 2, quantity: "1 Jar"},
        {recipe_id: 1, ingredient_id: 3, quantity: "A lot"},
        {recipe_id: 2, ingredient_id: 4, quantity: "1 box"},
        {recipe_id: 2, ingredient_id: 5, quantity: "Some"},
        { recipe_id: 2, ingredient_id: 6, quantity: "Some"},
        {recipe_id: 2, ingredient_id: 7, quantity: "1/4 #"}
      ]);
    });
};
