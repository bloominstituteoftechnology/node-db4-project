
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Burger'},
        {name: 'Fries'},
        {name: 'Pizza'}
      ]);
};
