
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, quantity: '4'},
        {id: 2, quantity: '3'},
        {id: 3, quantity: '6'}
      ]);
    });
};
