
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_book').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_book').insert([
        { id: 1, quantity: 3.5, measurement: 'cups of sauce', recipe_id: 1, ingredient_id:1 },
        { id: 2, quantity: 8, measurement: 'tbsp of chili powder', recipe_id: 3, ingredient_id: 3 },
        { id: 3, quantity: 5, measurement: 'cups of flour', recipe_id: 2, ingredient_id: 2 }
      ]);
    });
};
