
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {recipie_id: 1, recipie_name: 'Brownies'},
        {recipie_id: 2, recipie_name: 'Cheeseburger'},
        {recipie_id: 3, recipie_name: 'Pancake'}
      ]);
    });
};
