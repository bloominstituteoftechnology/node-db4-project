
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingedient: 'pickle', quantity: 2.4},
        {id: 2, ingedient: 'sausage', quantity: 4.7},
        {id: 3, ingedient: 'bacon', quantity: 3.6},
      ]);
    });
};
