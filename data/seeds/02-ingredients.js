
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'Buns' },
        {name: 'Patty' },
        {name: 'Cheese'},
        {name: 'Potato'},
        {name: 'Oil'},
        {name: 'Dough'},
        {name: 'Perperoni'}
      ]);
};
