exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Bread' },
        { ingredient_name: 'Beef' },
        { ingredient_name: 'Ham' },
        { ingredient_name: 'Lettuce' },
        { ingredient_name: 'Mustard' },
        { ingredient_name: 'Cheese' },
      ]);
    });
};
