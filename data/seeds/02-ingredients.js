
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'milk' },
        { ingredient_name: 'bread' },
        { ingredient_name: 'ham' },
        { ingredient_name: 'cheese' },
        { ingredient_name: 'cereal' },
        { ingredient_name: 'paprika' },
        { ingredient_name: 'avocado' }
      ]);
    });
};
