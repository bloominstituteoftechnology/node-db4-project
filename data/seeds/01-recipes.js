exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Boston Creme Pie' },
      { recipe_name: 'Pecan Pie' }
    ]);
  };