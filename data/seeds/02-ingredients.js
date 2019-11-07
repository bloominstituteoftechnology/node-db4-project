exports.seed = function(knex) {
    return knex('ingredients').insert([
      {name: 'spoon'},
      {name: 'bowl'},
      {name: 'milk'},
      {name: 'cereal'},
      {name: 'water'},
      {name: 'pasta'}
    ]);
};
