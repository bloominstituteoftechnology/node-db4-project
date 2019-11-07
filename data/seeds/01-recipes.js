exports.seed = function(knex) {
    return knex('recipes').insert([
      {name: 'cereal'},
      {name: 'pasta'}
    ]);
};
