
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'milk', recipe_id: 1},
        {ingredient_name: 'chocolate syrup', recipe_id: 1},
        {ingredient_name: 'bread', recipe_id: 2},
        {ingredient_name: 'american cheese', recipe_id: 2},
        {ingredient_name: 'butter', recipe_id: 2}
      ]);
    });
};
