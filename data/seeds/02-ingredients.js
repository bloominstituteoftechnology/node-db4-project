
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Cream', quantity: '2' },
        { name: 'Vanilla', quantity: '1' },
        { name: 'Chocolate', quantity: '3' },
        { name: 'Strawberry', quantity: '2' },
        { name: 'Carmel', quantity: '4' },
        { name: 'Pistachio', quantity: '3' },
        { name: 'Ice', quantity: '1' },
      ]);
    });
};
