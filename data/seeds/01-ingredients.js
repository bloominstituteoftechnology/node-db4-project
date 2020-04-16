
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {Ingredient_name: 'tomato'},
        {Ingredient_name: 'onion'},
        {Ingredient_name: 'cinamon'},
        {Ingredient_name: 'garlic'},
      ]);
    });
};
