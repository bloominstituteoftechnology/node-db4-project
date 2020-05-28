
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Buns' },
        {name: 'Patty' },
        {name: 'Cheese'},
        {name: 'Potato'},
        {name: 'Oil'},
        {name: 'Dough'},
        {name: 'Perperoni'}
      ]);
    });
};
