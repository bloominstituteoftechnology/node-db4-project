
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, instructions: 'test test test test'},
        {id: 2, instructions: 'test test test test'},
        {id: 3, instructions: 'test test test test'}
      ]);
    });
};
