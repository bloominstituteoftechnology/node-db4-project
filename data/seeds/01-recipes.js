
exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Tuna and Rice'},
      { recipe_name: 'Protein shake'}
    ]);
  };
  