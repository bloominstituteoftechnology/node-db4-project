
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'butter'},
        {name: 'flour'},
        {name: 'sugar'},
        {name: 'eggs'},
        {name: 'chocolate chips'},
      ]);
    });
};
