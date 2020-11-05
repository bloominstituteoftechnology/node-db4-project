
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {id: 1, rec_name: 'mac n cheese'},
        {id: 2, rec_name: 'Chocky milk'},
        {id: 3, rec_name: 'PBJ'}
      ]);
    });
};
