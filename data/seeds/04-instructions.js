
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, instructions: 'grill'},
        {id: 2, instructions: 'boil'},
        {id: 3, instructions: 'bake'}
      ]);
    });
};
