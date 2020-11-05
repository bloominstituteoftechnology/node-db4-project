
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step: 'heat water'},
        {id: 2, step: 'add macaroni'},
        {id: 3, step: 'drain macaroni'},
        {id: 4, step: 'add milk'},
        {id: 5, step: 'add butter'},
        {id: 6, step: 'add cheese mix'},
        {id: 7, step: 'serve'},
        {id: 8, step: 'add milk'},
        {id: 9, step: 'add chocloate milk mix'},
        {id: 10, step: 'stir'},
        {id: 11, step: '2 pieces bread'},
        {id: 12, step: 'add peanut butter'},
        {id: 13, step: 'add jelley'},
      ]);
    });
};
