exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { id: 1, name: 'Pasta aglio olio' },
    { id: 2, name: 'Lasagne' },
    { id: 3, name: 'Brasato' }
  ]);
};
