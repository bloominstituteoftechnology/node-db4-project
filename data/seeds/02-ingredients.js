
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, ingredients_name: 'cheese'},
        {id: 2, ingredients_name: 'chicken'},
        {id: 3, ingredients_name: 'crust'}
      ]);
    });
};
