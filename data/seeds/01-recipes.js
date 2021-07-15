exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
      {recipe_name: 'scrambled eggs'},
      {recipe_name: 'peanut butter'},
      {recipe_name: 'fried bacon'}
  ]);
};
