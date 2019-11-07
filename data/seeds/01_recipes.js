
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Steak'},
        {name: 'Banana Bread'},
        {name: 'Soup'}
      ]);
};
