
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, amount: '2.2', unit: '2', ingredient: 'Vanilla powder' },
        { id: 2, amount: '2', unit: '1', ingredient: 'Sugger' }
      ]);
    });
};
