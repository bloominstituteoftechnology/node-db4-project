exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Chorizo & mozzarella gnocchi bake' },
    { recipe_name: 'Easy butter chicken' },
    { recipe_name: 'Easy classic lasagne' },
    { recipe_name: 'Easy teriyaki chicken' }
  ]);
};
