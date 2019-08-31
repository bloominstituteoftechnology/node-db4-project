
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_name: 'flour, sugar, yeast', ingredients_price: 11},
        {ingredients_name: 'flour, sugar, milk', ingredients_price: 7.5},
        {ingredients_name: 'chocolate, flour, sugar', ingredients_price: 7}
      ]);
    });
};
