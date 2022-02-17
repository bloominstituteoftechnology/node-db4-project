
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, colName: 'Pineapple Pie'},
        {id: 2, colName: 'Watermelon Cake'},
        {id: 3, colName: 'Strawberry Cobbler'}
      ]);
    });
};
