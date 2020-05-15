
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Cheese' },
        { name: 'Olives' },
        { name: 'prosciutto' },
        { name: 'blueberries' },
        { name: 'whiskey' },
      ]);
    });
};
